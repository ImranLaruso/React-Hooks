import { useState, useRef, useEffect } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and previous was {prevName.current}
      </div>
    </>
  );
}

// import { useState, useRef } from "react";

// export default function UseRef() {
//   const [name, setName] = useState("");
//   const inputRef = useRef();

//   const focus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <>
//       <input
//         ref={inputRef}
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <div>My name is {name}</div>
//       <button onClick={focus}>Focus</button>
//     </>
//   );
// }
