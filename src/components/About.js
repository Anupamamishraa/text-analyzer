import React, { useState } from "react";

export default function About() {
  const [myStyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });

      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is a Text Analyzer?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                It is a tool that allows you to <strong>analyse</strong> a text
                by counting the number of sentences, words, characters present
                along with the time required by humans to read. It also provides
                options to convert the text into <strong>Uppercase </strong> or{" "}
                <strong>Lowercase</strong> as per requirement and provies{" "}
                <strong>Live</strong> preview of the text which can be converted
                into
              </p>
              <p>
                Along with that it enables users to use <strong>Dark </strong>
                mode.The idea behind dark mode is that it reduces the light
                emitted by device screens while maintaining the minimum colour
                contrast ratios required for readability.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Who can use it?
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              It is aimed at any type of writer (author, journalist, student,
              etc.) who writes texts that are limited to a minimum and/or
              maximum number of words.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I use it?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Text analyzer is very easy to use. Simply copy/paste the text or
                type it into the input box and click on Covert to Uppercase or
                Lowercase button.You can see the required details like number of
                sentences, words, characters present along with the time
                required by humans to read as soon as you type the text.The
                Clear button enables you to clear all the text in the input box
                hence helps you to start with new content anytime
              </p>
              <p>
                It is also recommended to use Dark mode to enhance its
                functionality by reducing the light emitted by device screens
                while maintaining the minimum colour contrast ratios required
                for readability by simply clicking <b>Enable Dark mode </b>{" "}
                button.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary "
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
