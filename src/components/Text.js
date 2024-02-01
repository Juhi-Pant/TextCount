import React, {useState} from 'react'

export default function Text(props) {
    const atclick=()=>{
        console.log("Uppercase was clicked "+ text);
         settext(text.toUpperCase());
    }
    const handleonchange=(event)=>{
        settext(event.target.value);
    }
    const [text, settext]=useState("Enter text here");
    const locase=()=>{
        settext(text.toLowerCase());
    }
    const clear=()=>{
        settext('');
    }
    const altclick=()=>{
        for(var i=0; i<text.length; i++){
            
        }
    }
  return (
    <>
    <div className='container'>
        <h1>{props.h1}</h1>
<div className="mb-3">
  <label for="myBox" className="form-label">{props.here}</label>
  <textarea value={text} className="form-control" onChange={handleonchange} id="myBox" rows="3" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} ></textarea>
  <button className="btn btn-primary my-3" onClick={atclick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={locase}>Convert to Lowercase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={clear}>Clear Text</button>
  <button className="btn btn-primary my-3 mx-3" onClick={altclick}>Alternate Text</button>
</div>
    </div>
    <div className="container">
        <h1>Your Summary</h1>
        <p>{text.length} characters.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
