import { deleteUser } from "../../api/api";
import "../manager.css";

const MemberListItem = ({ item, onDelete }) => {
  const handleDeleteClick = () => deleteUser(item.id);
  return (
    <>
      <section>
        <div className="memberManagePost">
          <div className="managerPostId">
            <p>{item.email}</p>
          </div>
          <div className="managerPostDay">
            <p>{item.created_date}</p>
          </div>
          <div className="managerPostModify">
            <button
              onClick={() => {
                handleDeleteClick();
                alert("해당 회원이 탈퇴 처리되었습니다.");
              }}
            >
              회원 삭제
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const MemberList = ({ items, onDelete }) => {
  return (
    <>
      {items.map((item) => {
        return <MemberListItem item={item} onDelete={onDelete} />;
      })}
    </>
  );
};

export default MemberList;
