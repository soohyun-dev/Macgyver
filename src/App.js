import "./App.css";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Recommend from "./recommend/recommend";
import Community from "./community/community";
import Map from "./Map";
import Mypage from "./mypage/mypage";
import SignUpDel from "./mypage/signUpDel";
import Posting from "./community/posting";
import Announce from "./community/announce";
import Report from "./community/report";
import CoummunityWrite from "./community/communityWrite";
import RecommendContent from "./recommend/recommendContent";
import AnnounceContent from "./community/announceContent";
import ReportPostingContent from "./community/reportPostingContent";
import Hot from "./community/catagory/hot";
import Tip from "./community/catagory/tip";
import Free from "./community/catagory/free";
import Review from "./community/catagory/review";
import LoginMain from "./login/loginMain";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/recommendContent" element={<RecommendContent />} />
        <Route path="/map" element={<Map />} />
        <Route path="/community" element={<Community />} />
        <Route path="/hot" element={<Hot />} />
        <Route path="/tip" element={<Tip />} />
        <Route path="/free" element={<Free />} />
        <Route path="/review" element={<Review />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/communityWrite" element={<CoummunityWrite />} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/announceContent" element={<AnnounceContent />} />
        <Route path="/report" element={<Report />} />
        <Route
          path="/reportPostingContent"
          element={<ReportPostingContent />}
        />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signUpDel" element={<SignUpDel />} />
      </Routes>
    </>
  );
};

export default App;
