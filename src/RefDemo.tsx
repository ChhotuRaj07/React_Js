import { useEffect, useRef, useState } from "react";

function RefDemo() {
    const [input , setinput] = useState("")
    // const [count , setcount] = useState(0)
    const count = useRef(0)

    useEffect(() =>{
        // setcount (count+1)
        count.current =  count.current +1
    })
    return(
        <>
        <h1>Hi Buddy I </h1>
        <input type="text"
         value={input}
         onChange={(i) => {setinput(i.target.value)}}
    
         />
         <h2> render count = {count.current}</h2>
        </>
    )
}

export default RefDemo;