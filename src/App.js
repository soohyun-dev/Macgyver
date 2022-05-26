import "./App.css";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Recommend from "./recommend/recommend";
import Community from "./community/community";
import Map from "./Map";
import Mypage from "./mypage/mypage";
import SignUpDel from "./mypage/signUpDel";
import Posting from "./community/posting";
import Announce from "./community/announce/announce";
import Report from "./community/report/report";
import CoummunityWrite from "./community/communityWrite";
import RecommendContent from "./recommend/recommendContent";
import AnnounceContent from "./community/announce/announceContent";
import ReportPostingContent from "./community/report/reportPostingContent";
import Tip from "./community/tip";
import Free from "./community/free";
import Review from "./community/review";
import Manager from "./manager/manager";
import PostManager from "./manager/postManager";
import AnnounceWrite from "./manager/announceWrite";
import CheckList from "./checkList";
import LoginMain from "./login/loginMain";
import NaverLogin from "./NaverLogin";
import NotFound from "./NotFound";
import RegisterPage from "./login/signUp";
import LoginPage from "./login/loginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/checkList" element={<CheckList />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/recommendContent/:id" element={<RecommendContent />} />
        <Route path="/map" element={<Map />} />
        <Route path="/community" element={<Community />} />
        <Route path="/hot" element={<Community />} />
        <Route path="/tip" element={<Tip />} />
        <Route path="/free" element={<Free />} />
        <Route path="/review" element={<Review />} />
        <Route path="/posting/:id" element={<Posting />} />
        <Route path="/communityWrite" element={<CoummunityWrite />} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/announceContent/:id" element={<AnnounceContent />} />
        <Route path="/report" element={<Report />} />
        <Route
          path="/reportPostingContent"
          element={<ReportPostingContent />}
        />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signUpDel" element={<SignUpDel />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/postManager" element={<PostManager />} />
        <Route path="/announceWrite" element={<AnnounceWrite />} />
        <Route path="/naverLogin" element={<NaverLogin />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/oauth/callback/kakao"></Route>
        <Route path="/signUp" element={<RegisterPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
