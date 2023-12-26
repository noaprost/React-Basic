import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [loc, setLoc] = useState({ x: 0, y: 300 });

  const handleLocation = (e) => {
    // setLoc({ x: e.clientX, y: e.clientY });
    // 만약 수평으로만 움직이고 싶다면?
    setLoc((prev) => ({ ...prev, x: e.clientX }));
  };
  // 하나의 함수에서 set을 여러번 해도 virtual DOM을 만들 때 한번에 묶어서 만들도록 되어있긴하지만
  // 비동기적으로 여기저기서 set을 사용할 경우 100% 효울적인 것은 아니기 때문에
  // 연관 있는 상태끼리는 객체를 만들어서 한번에 업데이트 해주는 것이 좋음

  return (
    <div className="container" onMouseMove={handleLocation}>
      <div
        className="pointer"
        style={{
          transform: `translate(${loc.x}px, ${loc.y}px)`,
        }}
      ></div>
    </div>
  );
}
