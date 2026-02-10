import { useEffect, useState } from "react";

const Effect = () => {
    const [user,setuser] = useState('')
    useEffect(() => {},[])
    return (
        <>
        <h1> Effect Demo</h1>
        <button onClick={() => {setuser("Raj")}}>click for greeating</button>
        {user && <h2>hi...{user}</h2>}
        
        </>
    )
}
export default Effect;