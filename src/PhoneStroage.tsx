import { useEffect, useState } from "react";

function PhoneStroage() {

        const [Input,setInput ] = useState ("");

        useEffect (() =>{
            const saveData = localStorage.getItem("name")
            if (saveData)
                setInput(saveData)
        })
    return(
        <>
        <h1>Hey Buddy </h1>
        </>
    )
}

export default PhoneStroage;