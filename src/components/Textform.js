import React, {useState} from 'react'

export default function Textform(props) {
   const handleUpClick=() =>{
      let newText = text.toUpperCase();
      setText(newText)
      props.showalert("Converted to Uppercase","success")
   }
   const handleLoClick=() =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showalert("Converted to Lowercase","success")
   }
   const handlecler=() =>{
      let newText = '';
      setText(newText)
      props.showalert("Text cleared","success")
   }
   const handleTitle=()=>{
      let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
      setText(newText)
      props.showalert("Transformed into a sentence","success")
   }
   const handlecopy=()=>{
      let text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showalert("Text Copied","success")
   }  
   const handleextra=()=>{
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "))
      props.showalert("Extra spaces removed","success")
   }
   const handleOnChange=(e) =>{
      setText(e.target.value)
   }
    const [text, setText] = useState('Enter text here');
    
    return (
      <>
    <div className='container'>
       <h1 className= {`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>      
       <div className="mb-3" >
          <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode === 'light'?'white':'black', color:props.mode === 'light'?'black':'white'}} rows="6"></textarea>
       </div>
       <button className="btn btn btn-dark mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn btn-dark mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn btn-dark mx-1" onClick={handleTitle}>Sentence Case</button>
       <button className="btn btn btn-dark mx-1" onClick={handleextra}>Remove Extra Space</button>
       <button className="btn btn btn-dark mx-1" onClick={handlecopy}>Copy Text</button>
       <button className="btn btn-danger mx-1" onClick={handlecler}>Clear Text</button>
    </div>
    <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'}`}>
      <h2 style={{color: "#ef9a9a"}}>Your Summary</h2>
      <p>You have typed {text.split(" ").length} words and {text.length} characters.</p>
      <details>
      <summary>Time taken to read</summary>
      <p>{0.008 * text.split(" ").length} Minutes OR {0.48 * text.split(" ").length} Seconds</p>
      </details>
    </div>
    </>
  )
}
