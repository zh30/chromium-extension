import React from "react";
import ReactDOM from "react-dom";
import "./content.css";

function Main() {
  return (
    <div className={"my-extension"}>
      <h1>Hello world - My first Extension</h1>
    </div>
  );
}

const app = document.createElement("div");
app.id = "my-extension-root";
app.style.display = "none";
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "clicked_browser_action") {
    toggle();
  }
});

function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
}

document.body.appendChild(app);
ReactDOM.render(<Main />, app);
