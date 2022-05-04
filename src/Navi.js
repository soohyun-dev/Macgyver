import "./nav.css";

const Navi = () => {
  return (
    <>
      <div className="nav">
        <h1 className="logo">MacGyver</h1>
        <div>
          <h2 className="menu" href="#">
            캠핑장추천
          </h2>
          <h2 className="menu" href="#">
            지도
          </h2>
          <h2 className="menu" href="#">
            커뮤니티
          </h2>
          <h2 className="menu" href="#">
            마이페이지
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navi;
