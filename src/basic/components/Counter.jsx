import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  // react에서는 UI와 밀접하게 관련이 있는 변수들을 state로 관리해줘야함
  // 왜냐하면 react 라이브러리는 변수가 변경이 되었는지 모르기 때문
  // useState Hook은 값을 기억하기 때문에 내부적으로 값을 가지고 있을 수 있음
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        // onClick 콜백함수가 실행된 순간 그때의 값이 캡쳐되어 전달
        // 그렇기 때문에 같은 동작을 하는 setCount가 몇번이 실행되어도 반환되는 값은 같음
        // 그러나 서로 다른 동작을 하고 있다면 가장 마지막에 실행된 setCount의 값이 업데이트 됨
        onClick={() => {
          // setCount(count + 1);
          setCount((prev) => prev + 1);
          // 위 코드를 다섯 번 실행하게 되면 5만큼 씩 카운트가 늘어남
          // 이전 값을 받아오기 때문에 업데이트된 값이 오게 됨
          // 비동기적으로 작업을 처리할 때는 업데이트 되기 이전의 오래된 값일지도 모르는 값에 의존하기 보다는
          // prev 즉, 가장 이전의 값에 접근하여 처리하는 것이 좋을 수도 있음
          onClick();
          // 부모의 setState를 그대로 사용하게 되면 OOP가 아니게 됨
          // 사용하는 입장에서는 부모가 어떤 동작을 하는지 모르는채 그냥 실행하기만 하면 되는 코드를 줄 필요가 있음
        }}
      >
        Add +
      </button>
    </div>
  );
}
