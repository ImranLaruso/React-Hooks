import { useState, useEffect } from "react";

export default function UseEffect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      // get cleaned up whenever unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}

// import { useState, useEffect } from "react";

// export default function UseEffect() {
//   const [resType, setResType] = useState("posts");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resType}`)
//       .then(response => response.json())
//       .then(json => setItems(json));
//   }, [resType]) //pass [], if you only want it on mount!

//   return (
//     <>
//       <div>
//         <button onClick={() => setResType("posts")}>Posts</button>
//         <button onClick={() => setResType("users")}>Users</button>
//         <button onClick={() => setResType("comments")}>Comments</button>
//       </div>
//       <h1>{resType}</h1>
//       {items.map((item) => {
//         return <pre>{JSON.stringify(item)}</pre>
//       })}
//     </>
//   );
// }
