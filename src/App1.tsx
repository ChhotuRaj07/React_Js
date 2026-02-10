function App1() {
    return (
        <>
            <h1>App1 Component</h1>
            <p>This is React</p>
            <Y />
            <IfElse no={true} />
        </>
    )
}
    const Y = () =>{
        return(
            <>
                <h1> Hii </h1>
            </>
           
        )
    }

   const IfElse = ({ no }: { no: boolean }) => {
    if (no) {
        return <h1>True</h1>
    } else {
        return <h1>False</h1>
    }
}



export default App1
