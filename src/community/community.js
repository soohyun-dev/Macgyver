import React from "react";
import Navi from "../components/Navi";
import "./community.css";
import CommunityCatagory from "../components/communityCatagory";
import CommunityPosting from "./communityPosting";
import { useEffect, useState } from "react";
import {
  deleteMyNotice,
  deletePosting,
  getNotice,
  getPosting,
  updatePosting,
} from "../api/api";
import BottomPage from "../components/bottomPage";

const LIMIT = 6;

const Community = () => {
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [hasNext, setHasNext] = useState(false);

  const handleDelete = async (id) => {
    const result = await deleteMyNotice(id);
    if (!result) return;

    setNotice((prevItems) => prevItems.filter((item) => item.id !== id));
  };

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
  const [notice, setNotice] = useState([]);

  const result = notice.filter(
    (item) =>
      item.category === "1" || item.category === "2" || item.category === "3"
  );

  const handleLoad2 = async () => {
    const chk = await getNotice();
    setNotice(chk);
  };
  useEffect(() => {
    handleLoad2();
  }, []);

  console.log(JSON.stringify(result));
  return (
    <>
      <Navi />
      <CommunityCatagory />

      <section>
        <div className="postingLocate"></div>
      </section>
      <section id="postingBlock">
        <CommunityPosting
          items={result}
          onDelete={handleDelete}
          onUpdate={updatePosting}
          onUpdateSuccess={handleUpdateSuccess}
        />
        <div class="pBbutton">
          {hasNext && (
            <button disabled={isLoading} onClick={handleLoadMore}>
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

export default Community;
