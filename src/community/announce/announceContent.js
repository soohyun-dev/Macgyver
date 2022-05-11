import Navi from "../../components/Navi";
import "./announceContent.css";
import { useLocation } from "react-router-dom";

const AnnounceContent = () => {
  // 전달 받은 props 활용
  const location = useLocation();
  const item = location.state.item;
  const { title, imgUrl, content } = item;
  return (
    <>
      <Navi />
      <section id="annPostingBlock">
        <p class="annPostingTitle">{title}</p>
      </section>
      <section id="ps-img">
        <div class="postingImg">
          <img src={imgUrl} alt="" />
        </div>
      </section>
      <section id="annPostingContent">
        <div class="annPostingContent">{content}</div>
      </section>
    </>
  );
};

export default AnnounceContent;
