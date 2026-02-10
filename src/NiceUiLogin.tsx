import { useState } from "react";
function NiceUiLogin() {
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [message, setmessage] = useState("");

    const handlelogin = () => {
        if (username === "" || password === "") {
            setmessage(" Please Fill the Message !")

        }else {
            setmessage("Welcome User !")
        }
        // console.log("username:",username)
        // console.log("Password:",password)
        setusername("");
        setpassword("");
    };

    return (
        <>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setusername (e.target.value)} />
      <br />
      <input type="text" placeholder="Password" value={password} onChange={(e) => setpassword (e.target.value)} />

      <button onClick={handlelogin}>Login</button>
      <br />
      <h3>{message}</h3>
      </>  
    )
}

export default NiceUiLogin;