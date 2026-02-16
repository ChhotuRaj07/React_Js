// import { useState } from "react";

// function ProperCounter() {
//     const [startvalue,setstartvalue] = useState("");
//     const [count,setcount] = useState(null);

//     const startcounter = () => {
//         setcount(Number(startvalue));
//     };

    
//     return (
//         <h1> Hii Buddy I am There Why Are You Not Afraid </h1>
//     );
// };

// export default ProperCounter;


import { useState } from "react";

function ProperCounter() {
  const [startvalue, setstartvalue] = useState("");
  const [count, setcount] = useState(null);

  const startcounter = () => {
    if (startvalue === "") return;
    setcount(Number(startvalue));
  };

  return (
    <>
      <h1>Proper Counter</h1>

      <input
        type="number"
        placeholder="Enter start value"
        value={startvalue}
        onChange={(e) => setstartvalue(e.target.value)}
      />

      <br /><br />

      <button onClick={startcounter}>Start Counter</button>

      {count !== null && (
        <>
          <h2>{count}</h2>

          <button onClick={() => setcount(count + 1)}>+</button>
          <button onClick={() => setcount(count - 1)}>-</button>
          <button onClick={() => setcount(Number(startvalue))}>
            Reset
          </button>
        </>
      )}
    </>
  );
}

export default ProperCounter;
