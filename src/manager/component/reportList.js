import "../postManager.css";
import "../manager.css";
import "../../community/report/reportPosting.css";
import { Link } from "react-router-dom";

const ReportListItem = ({ item }) => {
  return (
    <>
      <section>
        <div className="managerPosting">
          <div className="postName">
            <Link to={`/posting/${item.id}`} state={{ item: item }}>
              <p>{item.title}</p>
            </Link>
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
