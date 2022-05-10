import "../postManager.css";
import "../manager.css";

const PostingListItem = ({ item, onDelete }) => {
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <>
      <section>
        <div className="managerPosting">
          <div className="postingTitle">
            <p>{item.title}</p>
          </div>
          <div className="postingId">
            <p>{item.id}</p>
          </div>
          <div className="postingDay">
            <p>{item.createdAt}</p>
          </div>
          <div className="postingModify">
            <button onClick={handleDeleteClick}>게시물 삭제</button>
          </div>
        </div>
      </section>
    </>
  );
};

const PostingList = ({ items, onDelete }) => {
  return (
    <>
      {items.map((item) => {
        return <PostingListItem item={item} onDelete={onDelete} />;
      })}
    </>
  );
};

export default PostingList;
