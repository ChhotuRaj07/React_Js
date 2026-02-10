import { useEffect, useState } from "react";

function PhoneStroage() {

        const [Input,setInput ] = useState ("");

        useEffect (() =>{
            const saveData = localStorage.getItem("name")
            if (saveData)
                setInput(saveData)
        },[])
    return(
        <>
        <h1>Hey Buddy </h1>
        <h2> Why Are You Still There </h2>
        </>
    )
}

export default PhoneStroage;