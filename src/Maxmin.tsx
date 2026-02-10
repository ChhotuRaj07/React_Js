 import { useState } from "react";
function Maxmin() {
   
     
          const Number = [10,50,120];
          const [result, setResult] = useState<number | string>("");

          const ShowMin = () => {
            setResult(Math.min(...Number))
          };

          const ShowMax = () =>{
            setResult(Math.max(...Number))
          };
          return (
            <>
            <h2>Numbers: 10,50,120</h2>

            <button onClick={ShowMin}>Show Minmumum </button>
            <button onClick={ShowMax}>Show Maximum Value</button>

            <h3>Result: {result}</h3>
            </>
          )
}
export default Maxmin;