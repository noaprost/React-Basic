import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

export default function AppProfile() {
  return (
    <>
      <Avatar
        image="https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
        name="CP Cheol"
        job="벡앤드 개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1591969851586-adbbd4accf81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
        name="CP Won"
        job="프론트앤드 개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1584598788860-2695a3a6c874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
        name="Jane"
        job="디자이너"
      />
    </>
  );
}
