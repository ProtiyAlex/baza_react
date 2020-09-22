import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Btn from "./components/btn/Btn";
import Header from "./components/Header/Header";
import Logic from "./components/logic/Logic";

function App() {
  return (
    <div className="baza">
      <Header />
      <Btn />
      <Logic />
    </div>
  );
}

export default App;
