import "./reportPosting.css";

const ReportPosting = (item) => {
  const { title, user, day } = item;

  return (
    <>
      <section id="reportPost">
        <div className="postName">
          <p>{title}</p>
        </div>
        <div className="postId">
          <p>{user}</p>
        </div>
        <div className="postDay">
          <p>{day}</p>
        </div>
      </section>
    </>
  );
};

export default ReportPosting;
