import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import About from "./components/About";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Analyzer - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Analyzer - Light mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
        {/* when exact is used react matches exactly and if not used it makes partial matching i.e if you will try to render Component 2 and not using exact then react will make partial matching and render Component 1 at it place via partial matching
            /users ---> Component 1
            /users/home ---> Component 2 */}
        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
