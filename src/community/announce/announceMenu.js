import "./announceMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnnounceWrite from "../../manager/announceWrite";

const AnnounceItem = ({ item, onEdit, onDelete }) => {
  const { title } = item;
  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <>
      <div className="announceList">
        <div>
          <li>
            <Link to={`/announceContent/${item.id}`} state={{ item: item }}>
              <p>{title}</p>
            </Link>
          </li>
          <button onClick={handleEditClick}>수정</button>
          <button onClick={handleDeleteClick}>삭제</button>
        </div>
      </div>
    </>
  );
};

const AnnounceMenu = ({ items, onDelete, onUpdate, onUpdateSuccess }) => {
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
              <AnnounceWrite
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
            <AnnounceItem
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

export default AnnounceMenu;
