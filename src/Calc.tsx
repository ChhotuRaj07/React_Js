import { useState } from "react"

function Calc() {

    const [num1,setnum1] = useState("");
    const [num2,setnum2] = useState("");
    const [result,setresult] = useState(0);

    const Add = () => {
    setresult(Number(num1) + Number(num2));
    };

    const Subtract = () => {
        setresult(Number(num1) - Number(num2));
    };

    const Multiplay = () => {
        setresult(Number(num1) * Number(num2));
    };

    const Divide = () => {
        setresult(Number(num1) / Number(num2));
    };
    return(
        <>
            <div>
            <input type="Number"
            placeholder="Enter a Number !"
            value={num1}
            onChange={(i) => setnum1(i.target.value)} />

            <input type="text"
            placeholder="Enter a 2nd Number !"
            value={num2}
            onChange={(i) => setnum2(i.target.value)} />

            <br /><br />

            <button onClick={Add}>Add</button>
            <button onClick={Subtract}>Substract</button>
            <button onClick={Multiplay}>Multiplay</button>
            <button onClick={Divide}>Divide</button>
            <br />

            <h3> Result: {result}</h3>
            </div>
        </>
    )
}

export default Calc;