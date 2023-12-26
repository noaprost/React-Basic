import React, { useState } from "react";

export default function AppMentors() {
  // 상태는 기본적으로 불변성을 유지해야함
  // 상태의 배열이나 객체 내부의 값을 직접 업데이트 하면 x
  //
  // 업데이트를 하고 싶다면 객체와 배열의 전체적인 껍데기를 새로 만들어서 업데이트 해줘야 함
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
    const current = prompt("이름을 무엇으로 바꾸고 싶은가요?");
    const idx = person.mentors.findIndex((mentor) => mentor.name === prev);

    let copy = [...person.mentors];
    copy[idx] = { ...copy[idx], name: current };

    setPerson((person) => ({
      ...person,
      mentors: copy,
    }));

    // 선생님 코드
    //   setPerson((person) => ({
    //     ...person,
    //     mentors: person.mentors.map((mentor) => {
    //       if (mentor.name === prev) {
    //         return { ...mentor, name: current };
    //       }
    //       return mentor;
    //     }),
    //   }));
  };
  const handleAdd = () => {
    const name = prompt("멘토의 이름을 입력해주세요");
    const title = prompt("멘토의 타이틀을 입력해주세요");

    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };
  const handleDelete = () => {
    const name = prompt("삭제할 멘토의 이름을 입력해주세요");

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
  };
 
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
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
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
