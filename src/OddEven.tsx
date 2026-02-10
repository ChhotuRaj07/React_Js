// import { useState } from "react";

// function OddEven() = {
//     const  [Num1,setNum1] = useState(""); 
//     const  [Num2,setNum2] =  useState("");
//     const  [Num3,setNum3] = useState("");
//     const  [result,setResult] = useState("");

//     const OddEven = () => {
//         if ( Num1 === "" || Num2 === "" || Num3 === "") {
//             setResult ("Please Enter All Valid Number !")
//             return;
//         }

//         const numbers = [
//             Number(Num1),
//             Number(Num2),
//             Number(Num3)
//         ];

//         const lowest = Math.min(...numbers);
//         const maximum = Math.max(...numbers);
//     }    
//      setResult(`🔻 Lowest: ${lowest} | 🔺 Highest: ${highest}`);
//     };

//     return (
//         <>
//             <input
//                 type="number"
//                 placeholder="Number 1"
//                 value={num1}
//                 onChange={(e) => setNum1(e.target.value)}
//             />

//             <br /><br />

//             <input
//                 type="number"
//                 placeholder="Number 2"
//                 value={num2}
//                 onChange={(e) => setNum2(e.target.value)}
//             />

//             <br /><br />

//             <input
//                 type="number"
//                 placeholder="Number 3"
//                 value={num3}
//                 onChange={(e) => setNum3(e.target.value)}
//             />

//             <br /><br />

//             <button onClick={findLowestHighest}>
//                 Find Lowest & Highest
//             </button>

//             <br /><br />

//             <h3>{result}</h3>
//         </>
//     );
// }

// }


import { useState } from "react";

function OddEven() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [result, setResult] = useState("");

    const findLowestHighest = () => {
        if (num1 === "" || num2 === "" || num3 === "") {
            setResult("Please enter all numbers!");
            return;
        }

        const numbers = [
            Number(num1),
            Number(num2),
            Number(num3),
        ];

        const lowest = Math.min(...numbers);
        const highest = Math.max(...numbers);

        setResult(`🔻 Lowest: ${lowest} | 🔺 Highest: ${highest}`);
    };

    return (
        <>
            <input
                type="number"
                placeholder="Number 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Number 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Number 3"
                value={num3}
                onChange={(e) => setNum3(e.target.value)}
            />

            <br /><br />

            <button onClick={findLowestHighest}>
                Find Lowest & Highest
            </button>

            <br /><br />

            <h3>{result}</h3>
        </>
    );
}

export default OddEven;
