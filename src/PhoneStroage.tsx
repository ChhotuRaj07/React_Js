import { useEffect, useState } from "react";

function PhoneStroage() {

        const [Input,setInput ] = useState ("");

        useEffect (() =>{
            const saveData = localStorage.getItem("name")
            if (saveData)
                setInput(saveData)
        },[])

        useEffect(() =>{
            const timer = setTimeout(() =>{
                localStorage.setItem("name",Input)
            },5000)
            return() => clearTimeout(timer)
        })
    return(
        <>
        <input type="text"
        value={Input}
        onChange={(i) =>{setInput(i.target.value)}}
         />
        </>
    )
}

export default PhoneStroage;