import { useState } from "react";
import { Link } from "react-router-dom";
import "./communityPosting.css";
import CoummunityWrite from "./communityWrite";
import Logo from "../MacGyver.jpg";

const CommunityPostingItem = ({ item, onEdit, onDelete }) => {
  const { title, imgUrl } = item;

  console.log(imgUrl);

  const ImageUrl = imgUrl === null ? Logo : imgUrl;

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <>
      <section id="cmPosting">
        <div className="cmPostingBlock">
          <div className="cmPostingContent">
            <div className="cmPostingTitle">
              <Link
                to={`/posting/${item.id}`}
                state={{
                  item: item,
                }}
              >
                <p>{title}</p>
              </Link>
            </div>
            <div className="cmPostingImg">
              <img src={ImageUrl} alt={title} />
            </div>
            {/* <button onClick={handleEditClick}>수정</button>
            <button onClick={handleDeleteClick}>삭제</button> */}
          </div>
        </div>
      </section>
    </>
  );
};

const CommunityPosting = ({ items, onDelete, onUpdate, onUpdateSuccess }) => {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);

  return (
    <>
      {items.map((item) => {
        if (item.id === editingId) {
          const { id, imgUrl, title, content } = item;
          const inititalValues = { title, content, imgFile: null };

          const handleSubmit = (formData) => onUpdate(id, formData);

          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };

          return (
            <div key={item.id} className="cmInline">
              <CoummunityWrite
                inititalValues={inititalValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
              />
            </div>
          );
        }
        return (
          <div key={item.id} className="cmInline">
            <CommunityPostingItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </div>
        );
      })}
    </>
  );
};

export default CommunityPosting;
