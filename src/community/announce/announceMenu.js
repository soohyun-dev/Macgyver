import "./announceMenu.css";

const AnnounceMenu = () => {
  let announceTitle = "4월 맞이 추천이벤트!!! 스타벅스 경품이 쏟아진다!";

  return (
    <>
      <div className="announceList">
        <div>
          <li>
            <p>{announceTitle}</p>
          </li>
        </div>
      </div>
    </>
  );
};

export default AnnounceMenu;
