import React from 'react'

export default function About(props) {
    return (
        <div className = "container my-3">
            <div className ='container my-5' style = {{color : props.mode==='dark'?'white':'#042743'}}>
                <h3 className='my-3'>{props.heading}</h3>
                <p>This is a text based utility to redefine your text using various functions.</p>
                <p className='my-7'>Developer:</p>
                <p className='my-3 mx-3'>Shubhanshu Gupta</p>
            </div>
        </div>
    )
}
