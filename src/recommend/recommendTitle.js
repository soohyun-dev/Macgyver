import { useEffect, useState } from "react";
import { getMyPage } from "../api/api";
import "./recommendTitle.css";

const RecommendTitle = () => {
  // 유저 정보 불러오기
  const [user, setUser] = useState([]);

  const loadUser = async () => {
    const information = await getMyPage();
    setUser(information);
  };

  useEffect(() => {
    loadUser();
  }, []);
  console.log("유저", user);

  return (
    <section id="myPageTitle">
      <p className="titleText">
        <span>{user.nickname}</span>님에게 추천해드려요!
      </p>
    </section>
  );
};

export default RecommendTitle;
