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
        document.getSelection().removeAllRanges();
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
				<textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
			</div>
			<button disabled = {text.length===0} type="button" className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to Uppercase</button>
			<button disabled = {text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
			<button disabled = {text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClText}>Clear Text</button>
			<button disabled = {text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCoText}>Copy Text</button>
			<button disabled = {text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
			<div className="container my-5" style = {{color : props.mode==='dark'?'white':'#042743'}}>
				<h3>Your Text Summary</h3>
				<p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.trim().length} characters</p>
				<p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>
				<h3>Preview</h3>
				<p>{text.trim().length > 0? text:'Nothing to preview!'}</p>
			</div>
		</div>
    )
}
