import { useEffect, useState } from "react";

function StroageDemo () {

    const [Input,setInput] = useState("")

    useEffect(()=>{
        const saveData = localStorage.getItem("name")
        if (saveData)
                setInput(saveData)
    },[])

        useEffect(() =>{
            const timer = setTimeout(() =>{
                localStorage.setItem("name",Input)
            },2000)
            return() => clearTimeout(timer)
        },[Input])
    return(
        <>
        <input type="text" 
        value={Input}
        onChange={(i) =>{setInput(i.target.value)}}/>
        </>
    )
}

export default  StroageDemo;