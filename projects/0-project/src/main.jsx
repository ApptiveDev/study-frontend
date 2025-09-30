import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./intro.css";
import profile from "./profile.png";

function Introduction() {
  return (
    <div class="container">
      <div class="header">
        <h1>✨ 자기소개 페이지 ✨</h1>
      </div>
      <br />
      <br />
      <div class="info_goal">
        {" "}
        {/* 전체 컨텐츠 감싸는 div */}
        <br />
        <br />
        <div class="info">
          {" "}
          {/* info 시작 */}
          <div class="photo">
            {" "}
            {/* photo 시작 */}
            <img src={profile} className="profile" width="200" />
          </div>{" "}
          {/* photo 끝 */}
          <div class="info_text">
            {" "}
            {/* info_text 시작 */}
            <p>
              <b>이름</b> : 김가연
              <br />
              <b>나이</b> : 21살
              <br />
              <b>학번</b> : 24학번
              <br />
              <b>직군</b> : 프론트엔드
              <br />
              <b>전공</b> : 정보컴퓨터공학부 컴퓨터공학과 💻
              <br />
              <b>e-mail</b> : kgy02269405@pusan.ac.kr
              <br />
              <br />
              <div class="sns">
                {" "}
                {/* sns 시작 */}
                <a href="https://github.com/">
                  <img
                    class="git"
                    src="https://img.icons8.com/?size=160&id=wqGmdISvpm0c&format=png"
                  />
                </a>
                <a href="https://discord.com/channels/@me">
                  <img
                    class="discord"
                    src="https://img.icons8.com/?size=160&id=mpmtUl2fgdLN&format=png"
                  />
                </a>
                <a href="https://blog.naver.com/urqayeon">
                  <img
                    class="blog"
                    src="https://img.icons8.com/?size=100&id=58240&format=png"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    class="insta"
                    src="https://img.icons8.com/?size=160&id=l9Yus8DgqCtB&format=png"
                  />
                </a>
              </div>{" "}
              {/* sns 끝 */}
            </p>
          </div>{" "}
          {/* info_text 끝 */}
        </div>{" "}
        {/* info 끝 */}
        <div class="goal">
          <h3>&emsp;My Goal 🌱</h3>
          <p>
            - 계획 중인 프로젝트 열심히해서 성공적 마무리 <br />
            - 프론트엔드 고수에 가까워지기
            <br />
            - 우즈 콘서트 갔다오기
            <br />
            - 친구들과 해외 여행 갔다오기
            <br />- 학점 열심히 관리하기
          </p>
        </div>
      </div>{" "}
      {/* 전체 컨텐츠 감싸는 div 끝 */}
      <br />
      <div class="music">
        {" "}
        {/* music 시작 */}
        <h3>
          &emsp;페이지가 좀 허전한 것 같아 저의 최애 앨범커버를 보여드립니다 🎵
          🎶
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
      </div>{" "}
      {/* music 끝 */}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Introduction />
  </StrictMode>
);
