import React, { useState } from 'react';

export default function TextArea(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted successfully!","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted successfully!","success");
    }

    const handleClText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared successfully!","success");
    }

    const handleCoText = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied to clipboard successfully!","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed successfully!","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const[text, setText] = useState("")
    return (
		<div className = "container" style = {{color : props.mode==='dark'?'white':'#042743'}}>
			<h2 className='my-3'>{props.heading}</h2>
			<div className="mb-3 my-3">
				<textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
			</div>
			<button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
			<button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
			<button type="button" className="btn btn-primary mx-2" onClick={handleClText}>Clear Text</button>
			<button type="button" className="btn btn-primary mx-2" onClick={handleCoText}>Copy Text</button>
			<button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
			<div className="container my-5" style = {{color : props.mode==='dark'?'white':'#042743'}}>
				<h3>Your Text Summary</h3>
				<p>{text.trim().length > 0? text.trim().split(" ").length : "0"} words and {text.trim().length} characters</p>
				<p>{text.trim().length > 0? 0.008 * text.trim().split(" ").length : "0"} Minutes Read</p>
				<h3>Preview</h3>
				<p>{text.length > 0? text:'Enter text in above textarea to preview here'}</p>
			</div>
		</div>
    )
}
