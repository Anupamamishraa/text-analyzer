import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   text = "new Text";  wrong way to change the state
  //   setText("new Text"); // Correct way

  const handleUpClick = () => {
    // console.log("Uppcase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppcase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    // console.log("Uppcase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "warning");
  };
  const handleCopy = () => {
    let newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipborad", "info");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#160948",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handleUpClick}  disabled={text.length === 0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handleLoClick}  disabled={text.length === 0}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary btn-sm mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handleCopy}  disabled={text.length === 0}>
          Copy Text
        </button>
        <button
          className="btn btn-primary btn-sm mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary </h2>
        <p>
          <b>{text.split(" ").filter(()=>{return text.length!==0}).length} </b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").filter(()=>{return text.length!==0}).length}</b> Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview"}
        </p>
      </div>
    </>
  );
}
