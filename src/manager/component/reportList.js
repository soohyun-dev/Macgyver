import "../postManager.css";
import "../manager.css";
import "../../community/report/reportPosting.css";

const ReportListItem = ({ item }) => {
  return (
    <>
      <section>
        <div className="managerPosting">
          <div className="postName">
            <p>{item.title}</p>
          </div>
          <div className="postId">
            <p>{item.user}</p>
          </div>
          <div className="postDay">
            <p>{item.day}</p>
          </div>
        </div>
      </section>
    </>
  );
};

const ReportList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <ReportListItem item={item} />;
      })}
    </>
  );
};

export default ReportList;
