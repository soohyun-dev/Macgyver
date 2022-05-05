import { Link } from "react-router-dom";
import Navi from "../Navi";
import "./report.css";
import ReportPosting from "./reportPosting";
import ReportTitle from "./reportTitle";

const Report = () => {
  return (
    <>
      <Navi />
      <ReportTitle />
      <section id="reportClassify">
        <div className="reportName">
          <p>제목</p>
        </div>
        <div className="reportId">
          <p>ID</p>
        </div>
        <div className="reportDay">
          <p>작성일</p>
        </div>
      </section>
      <Link to="/reportPostingContent">
        <ReportPosting />
      </Link>
      <Link to="/reportPostingContent">
        <ReportPosting />
      </Link>
      <Link to="/reportPostingContent">
        <ReportPosting />
      </Link>

      <section>
        <div className="postingPage">
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              1
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              2
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              3
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              4
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              5
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              6
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              7
            </p>
          </li>
        </div>
      </section>
    </>
  );
};

export default Report;
