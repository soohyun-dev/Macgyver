import BottomPage from "../../components/bottomPage";
import Navi from "../../components/Navi";
import "./report.css";
import ReportTitle from "./reportTitle";
import { useState, useEffect } from "react";
import { getPosting, deletePosting, getNotice } from "../../api/api";
import ReportList from "../../manager/component/reportList";
import item from "../../mock/reportMock.json";

const LIMIT = 8;

const Report = () => {
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [hasNext, setHasNext] = useState(false);

  const handleDelete = async (id) => {
    const result = await deletePosting(id);
    if (!result) return;

    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleLoad = async (options) => {
    const { reviews, paging } = await getPosting(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ offset, limit: LIMIT });
  };

  let today = new Date();

  const [notice, setNotice] = useState([]);

  const result = notice.filter((item) => item.category === "4");
  const noticeLoad = async () => {
    const chk = await getNotice();
    setNotice(chk);
  };

  useEffect(() => {
    noticeLoad();
  }, []);

  console.log(JSON.stringify(result));

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
      <ReportList items={result} onDelete={handleDelete} />
      <div class="loadButton">
        <button disabled={!hasNext} onClick={handleLoadMore}>
          더보기
        </button>
      </div>
      <BottomPage />
    </>
  );
};

export default Report;
