// import { QRCanvas } from "qr/dom.js";
import JsBarcode from "jsbarcode";
import { QRCodeCanvas } from "qrcode.react";
import { useState, useRef } from "react";


    const Qr = () => {
        const [text,settext] = useState('');
        const bar = useRef(null);


        const  jsbarcode = () => {
            if (text)
                JsBarcode(bar.current, text, {format: "CODE128",displayValue:true})
        }
    
    return (
        <>
        <h1>Qr Code </h1>
        <input type=" text" value={text}
        onChange={(i) => {settext(i.target.value)}} />
        <br />
        <br />
        {text && <QRCodeCanvas value={text} size={200} />}

        <button onClick={jsbarcode}></button>
        <br />
        <svg ref={bar}/>
        </>
        
    );
}


export default Qr;