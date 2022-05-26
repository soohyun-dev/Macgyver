// const { Kakao } = window;
// Kakao.Auth.setAccessToken(ACCESS_TOKEN);

const uri = window.location.href;
const arr = uri.split("=");

const KakaoTest = () => {
  return (
    <div>
      <p>카카오 테스트 페이지입니다.</p>
      <h3>{uri}</h3>
      <h3>{arr[1]}</h3>
    </div>
  );
};

export default KakaoTest;
