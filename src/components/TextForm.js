import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");

    }

    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        // window.speechSynthesis.speak(msg);
        window.speechSynthesis.speak(msg); 
        props.showAlert("Message Speaked!","success");

    }

    const handleCopy = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied!","success");

    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!","success");

    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const[text, setText] = useState('');
    // text = "new text"; 
    // setText("new text");
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mb-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mb-2 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mb-2 mx-2" onClick={speak}>Speak the text</button>
            <button className="btn btn-primary mb-2 mx-2" onClick={handleCopy}>Copy the text</button>
            <button className="btn btn-primary mb-2 mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
        </div>
    </>
  )
}
