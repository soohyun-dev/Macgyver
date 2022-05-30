import Navi from "../components/Navi";
import "./signUpDel.css";
import "../login/idFind.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteUser, getUser } from "../api/api";

const SignUpDel = () => {
  const [items, setItems] = useState([]);
  const handleLoad = async () => {
    const user = await getUser();
    setItems(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const handleDeleteClick = () => deleteUser(items.id);

  return (
    <>
      <Navi />
      <section id="idFindBlock">
        <div>
          <p className="idFindTitle">회원 탈퇴</p>
        </div>

        <div className="signUpDelText">
          <p>
            탈퇴 시 등록 정보는 모두 삭제처리 되며, 이후 되돌릴 수 없습니다.
          </p>
          <p>정말 탈퇴를 진행하시겠습니까?</p>
        </div>

        <div className="signUpDelButton">
          <p
            href="login.html"
            className="signUpDelSubmit"
            onClick={() => {
              handleDeleteClick();
              alert("회원 탈퇴 처리되었습니다.");
            }}
          >
            예
          </p>
          <Link to="/mypage">
            <p href="login.html" className="signUpDelSubmit">
              아니오
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SignUpDel;
