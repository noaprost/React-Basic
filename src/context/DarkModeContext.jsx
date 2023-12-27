import { createContext, useState } from "react";

export const DarkModeContext = createContext(); // 얘가 데이터를 가지고 있다면, provider는 씌워주는 우산 역할을 함

// context를 만들땐 provider를 같이 만들어 줘야함
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
