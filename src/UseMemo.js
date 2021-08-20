import { useState, useMemo, useEffect } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slow(number);
  }, [number]);

  //Referencial eqality
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyle]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br></br>
      <button onClick={() => setDark((prevState) => !prevState)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}

function slow(num) {
  console.log("runing slow func");
  for (let i = 0; i <= 1001; i++) {}
  return num * 2;
}
