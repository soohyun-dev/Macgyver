import Navi from "../components/Navi";
import "./announce.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import AnnounceMenu from "./announceMenu";
import { Link } from "react-router-dom";

const Announce = () => {
  return (
    <>
      <Navi />
      <section id="announceBlock">
        <FontAwesomeIcon icon={faBullhorn} className="announceIcon" />
        <p className="announceTitle">맥가이버에서 알려드립니다!!</p>
        <Link to="/announceContent">
          <AnnounceMenu />
        </Link>
        <Link to="/announceContent">
          <AnnounceMenu />
        </Link>
        <Link to="/announceContent">
          <AnnounceMenu />
        </Link>
        <Link to="/announceContent">
          <AnnounceMenu />
        </Link>
      </section>
    </>
  );
};

export default Announce;
