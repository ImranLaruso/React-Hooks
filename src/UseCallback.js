import { useState, useEffect, useCallback } from "react";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //useCallback return entire getItems function
  //But useMemo only returns the return value of that func
  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br></br>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}
