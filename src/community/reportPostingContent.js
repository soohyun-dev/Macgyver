import Navi from "../Navi";
import "./reportPostingContent.css";
import ReportTitle from "./reportTitle";

const ReportPosting = () => {
  return (
    <>
      <Navi />
      <ReportTitle />
      <section id="reportPostingBlock">
        <p className="reportPostingTitle">
          참좋아요 캠핑장 주기적으로 올라옵니다. 광고 의심됩니다.
        </p>
      </section>
      <section id="postingId">
        <div>
          <p>ilsanCamper</p>
          <p>2022-04-16</p>
        </div>
      </section>
      <section id="content">
        <div className="reportPostingContent">
          <p>
            참좋아요 캠핑장 거의 2~3일꼴로 게시물 올라오는데 확인부탁드립니다.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportPosting;
