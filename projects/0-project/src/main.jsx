import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./intro.css";

function Introduction() {
  return (
    <div class="container">
      <h1>✨ 자기소개 페이지 ✨</h1>
      <h2>간단한 나의 정보 요약</h2>
      <div class="info">
        <div class="photo">
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0.fwebp/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/tNWE6ahM8L07uaj81q4HjFD6qrY"
            alt="가나디"
            width="200"
          />
        </div>
        <div class="info_text">
          <p>
            <b>이름</b> : 김가연
            <br />
            <b>나이</b> : 21살
            <br />
            <b>학번</b> : 24학번
            <br />
            <b>전공</b> : 정보컴퓨터공학부 컴퓨터공학과 💻
            <br />
            <b>직군</b> : 프론트엔드
            <br />
            <br />
            안녕하세요! 저는 앱티브 23기 프론트엔드 직군을 맡게 된 김가연입니다.
            <br />
            앞으로 열심히 스터디 참여하면서 많이 배우고 성장하고 싶습니다!
            스터디원분들, 멘토님들 잘 부탁드립니다
          </p>
        </div>
      </div>
      <br />
      <div class="music">
        <h3>
          &emsp;페이지가 좀 허전한 것 같아 저의 최애 앨범커버를 보여드립니다 🎵
          🎶 🎼 🎹
        </h3>
        <img
          src="https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/976/703/82976703_1663118461097_1_600x600.JPG"
          width="200"
        />
        <img
          src="https://image.aladin.co.kr/product/24929/42/cover500/c302832203_1.jpg"
          width="200"
        />
        <img
          src="https://image.yes24.com/momo/TopCate1167/MidCate004/116631542.jpg"
          width="200"
        />
        <img src="https://image.yes24.com/goods/101963403/XL" width="200" />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Introduction />
  </StrictMode>
);
