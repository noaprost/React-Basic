import React, { memo, useCallback, useMemo, useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  // useCallback은 dependency가 없다면 내부 함수를 딱 한번만 호출해줌
  const handleUpdate = useCallback(() => {
    const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
    const current = prompt("이름을 무엇으로 바꾸고 싶은가요?");
    dispatch({ type: "updated", prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt("멘토의 이름을 입력해주세요");
    const title = prompt("멘토의 타이틀을 입력해주세요");
    dispatch({ type: "added", name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt("삭제할 멘토의 이름을 입력해주세요");
    dispatch({ type: "deleted", name });
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ( {mentor.title} )
          </li>
        ))}
      </ul>
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate}></Button>
      <Button text="멘토 추가하기" onClick={handleAdd}></Button>
      <Button text="멘토 삭제하기" onClick={handleDelete}></Button>
    </div>
  );
}

// memo로 감싸주게 되면 props가 새로 만들어져서 전달되더라도 이전값과 비교했을 떄 같은 값이라면 리렌더링 하지 않도록 메모해줌
const Button = memo(({ text, onClick }) => {
  // useMemo는 특정한 dependency를 명시하지 않으면 딱 한번만 수행됨
  // 이 작업 기억해놓을게! 캐시해놓을게! 이런 의미
  const result = useMemo(() => carculateSomthing(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function carculateSomthing() {
  for (let i = 0; i < 10000; i++) {
    console.log(": )");
  }
  return 10;
}

const initialPerson = {
  name: "철이",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어 개발자",
    },
    {
      name: "앨리",
      title: "주니어 개발자",
    },
  ],
};
