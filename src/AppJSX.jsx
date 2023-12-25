import "./App.css";

// 함수 이름은 무조건 대문자로 시작
// UI를 어떻게 표기할 것인가를 JSX문법으로 return에 명시
// <유의사항>
// 1. 컴포넌트는 return 시 꼭 하나의 태그만 return해야함, 부모태그 활용 </>, <Fragment/>
// 2. class를 사용할 때는 className을 사용해야함
// 3. JS코드를 작성할 떄는 {}를 이용해야함

// 리액트 컴포넌트는 파일명 뒤에 보통 x를 붙임
// 리액트 컴포넌트들은 하나의 폴더에 일반적으로 묶어놓음

function AppJSX() {
  const name = "오렌지원";
  const list = ["우유", "딸기", "초코"];
  return (
    <>
      <h1 className="orange">Hello! {name}</h1>
      <h2>Hello</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
