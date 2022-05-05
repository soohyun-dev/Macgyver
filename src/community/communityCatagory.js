import "./communityCatagory.css";

const communityCatagory = () => {
  return (
    <>
      <section id="communityCatagoryBlock">
        <div>
          <div className="leftBlock">
            <li>
              <p>HOT</p>
            </li>

            <li>
              <p>팁공유</p>
            </li>
            <li>
              <p>자유</p>
            </li>
            <li>
              <p>후기</p>
            </li>
          </div>
          <div className="rightBlock">
            <li>
              <p>신고방</p>
            </li>
            <li>
              <p>공지</p>
            </li>
            <li>
              <p>글쓰기</p>
            </li>
          </div>
        </div>
      </section>
    </>
  );
};

export default communityCatagory;
