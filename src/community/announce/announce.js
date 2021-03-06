import Navi from "../../components/Navi";
import "./announce.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import AnnounceMenu from "./announceMenu";
import { useState, useEffect } from "react";
import { getNotice, getPosting, updatePosting } from "../../api/api";
import BottomPage from "../../components/bottomPage";
import item from "../../mock/cmMock.json";

const Announce = () => {
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [hasNext, setHasNext] = useState(false);

  const [notice, setNotice] = useState([]);

  const LIMIT = 6;

  const handleLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getPosting(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const { paging, reviews } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + options.limit);
    setHasNext(paging.hasNext);
  };

  // 글 불러오기
  const handleLoadMore = async () => {
    await handleLoad({ offset, limit: LIMIT });
  };

  const handleUpdateSuccess = (review) => {
    setItems((prevItems) => {
      const splitIdx = prevItems.findIndex((item) => item.id === review.id);
      return [
        ...prevItems.slice(0, splitIdx),
        review,
        ...prevItems.slice(splitIdx + 1),
      ];
    });
  };

  const result = notice.filter((item) => item.category === "5");
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
      <section id="announceBlock">
        <FontAwesomeIcon icon={faBullhorn} className="announceIcon" />
        <p className="announceTitle">맥가이버에서 알려드립니다!!</p>
        <AnnounceMenu
          items={result}
          onUpdate={updatePosting}
          onUpdateSuccess={handleUpdateSuccess}
        />
        <div>
          {hasNext && (
            <button
              className="pButton"
              disabled={isLoading}
              onClick={handleLoadMore}
              style={{ marginTop: "100px" }}
            >
              더 보기
            </button>
          )}
          {loadingError?.message && <span>{loadingError.message}</span>}
        </div>
      </section>
      <BottomPage />
    </>
  );
};

export default Announce;
