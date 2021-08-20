import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();

export default function UseRef() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

const Child = () => {
  return <GrandChild />;
};

const GrandChild = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div>The theme is {theme}</div>
      <button onClick={() => setTheme("light")}>Change the theme</button>
    </>
  );
};
