import Navi from "../components/Navi";
import "./announceContent.css";

const AnnounceContent = () => {
  return (
    <>
      <Navi />
      <section id="annPostingBlock">
        <p class="annPostingTitle">
          4월 맞이 추천이벤트!!! 스타벅스 경품이 쏟아진다!
        </p>
      </section>
      <section id="ps-img">
        <div class="postingImg">
          <img src={"img/event.jpg"} alt="" />
        </div>
      </section>
      <section id="annPostingContent">
        <div class="annPostingContent">
          <p>맥가이버와 스타벅스가 함께하는 이벤트!!</p>
          <p>
            캠핑 리뷰등록후 좋아요 10개 이상 받은 작성자분들에게 스타벅스 아이스
            아메리카 기프티콘을 드립니다
          </p>
          <p>단, 200명에게만 드리는 선착순 이벤트! 서둘러 참여하세요!!</p>
        </div>
      </section>
    </>
  );
};

export default AnnounceContent;
