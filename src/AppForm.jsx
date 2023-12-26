import React, { useState } from "react";

export default function AppForm() {
  const [info, setInfo] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault(); // 이 코드를 작성하지 않으면 submit 버튼을 클릭할 때 마다 페이지가 새로고침됨
    console.log(info);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  return (
    // 리액트는 상태가 변할 때 마다 바뀐 UI를 화면에 보여주는데,
    // input 태그안에 입력한 문자 같은 경우는 상태가 변경된게 아니어도 화면의 UI가 업데이트 됨
    // 이러한 것을 uncontrolled component라고 함
    // react에서 UI의 update는 항상 상태의 변경에 의해서 이루어져야함 -> 따라서 uncontrolled component는 리액트가 추구하는 방향에 맞지 않음
    // 그래서 상태를 만들어서 업데이트하도록 변경해주어야 함
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름 : </label>
      <input
        type="text"
        id="name"
        name="name"
        value={info.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일 : </label>
      <input
        type="email"
        id="email"
        name="email"
        value={info.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
