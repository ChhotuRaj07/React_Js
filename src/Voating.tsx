// import { useState } from "react";

// function Voating () {

//     const [age , setage] = useState ("");
//     const [isEligible,setisEligible] = useState("false");
//     const [message,setmessage] = useState("");
//     const [votedparty,setvotedparty] =useState("");

//     const checkEligiblity = () => {
//         if (age === 18 "") {
//             setmessage ("Please Enter your Age !")
//             return;
//         }

//         if (age < 18) {
//             setisEligible(false);
//             setmessage("Sorry You Are Not Eligible For Vote !")
//         }else {
//             setisEligible (true);
//             setmessage("");
//         }

//     };


//     const vote = (party) => {
//         setvotedparty(party);
//     };

//     return (
//         <>
//         <h2>Enter Your Age !</h2>
//         <input type="text" placeholder="Enter Your Age !" value={age} onChange={(e) => setage(e.target.value)} />
//         <button onClick={checkEligiblity}>Check Eligblity </button>

//         {message && <p {message}> </p>}

//         {isEligible && ! votedparty && (
//             <h3> select party </h3>

//             <button onClick={ () => vote ("Bjp")}> Bjp</button>
//               <button onClick={ () => vote ("Congress")}> Congress</button>
//         )};

      

//         </>


//     )
// }

// export default Voating;



import { useState, type SetStateAction } from "react";

function Voting() {
  const [age, setAge] = useState("");
  const [isEligible, setIsEligible] = useState(false);
  const [message, setMessage] = useState("");
  const [votedParty, setVotedParty] = useState("");

  const checkEligibility = () => {
    if (age === "") {
      setMessage("Please enter your age!");
      setIsEligible(false);
      return;
    }

    const numAge = Number(age);

    if (numAge < 18) {
      setIsEligible(false);
      setMessage("Sorry, you are not eligible to vote!");
    } else {
      setIsEligible(true);
      setMessage("");
    }
  };

  const vote = (party: SetStateAction<string>) => {
    setVotedParty(party);
  };

  return (
    <>
      <h2>Voting App</h2>

      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={checkEligibility}>Check Eligibility</button>

      {message && <p>{message}</p>}

      {isEligible && !votedParty && (
        <>
          <h3>Select Party</h3>
          <button onClick={() => vote("BJP")}>BJP</button>
          <button onClick={() => vote("Congress")}>Congress</button>
        </>
      )}

      {votedParty && <h3>Thanks for voting {votedParty} 🎉</h3>}
    </>
  );
}

export default Voting;
