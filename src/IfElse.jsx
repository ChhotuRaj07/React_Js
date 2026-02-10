const Y = () => {
    return (
        <>
            <h1 className="text-danger">False</h1>
            <h1 className="text-danger">Oops</h1>
        </>
    )
}

const IfElse = ({ no }) => {
    if (no) {
        return <h1>True</h1>
    } else {
        return <h1>False</h1>
    }
}

export default IfElse
