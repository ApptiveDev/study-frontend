import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h2 style={{ color: "darkblue", textAlign: "center", fontSize: "30px" }}>
      이름 : 나예은
    </h2>
    <div style={{ textAlign: "center", fontSize: "20px" }}>
      <p>안녕하세요, 정보컴퓨터공학부 나예은입니다.</p>
      <p>잘 부탁드립니다.</p>
    </div>
    <div className="TMI" style={{ marginTop: "30px", justifyItems: "center" }}>
      <ul>
        <li>뭘 추가하면 좋을까요..?</li>
      </ul>
    </div>
  </StrictMode>
);
