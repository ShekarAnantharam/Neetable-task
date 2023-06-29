import React, { useState } from "react";
import olaLogo from "./Images/ola-white-logo.svg";
import "./styles.css";
import hamburger from "./Images/Hamburger.svg";

import InputDiv from "./inputDiv";
function OlaClone() {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);

  const [click3, setClick3] = useState(false);

  const clickFunction1 = () => {
    setClick1(!click1);
    setClick2(false)
    setClick3(false)
  };
  const clickFunction2 = () => {
    setClick1(false);
    setClick2(!click2)
    setClick3(false)
  };
  const clickFunction3 = () => {
    setClick1(false);
    setClick2(false)
    setClick3(!click3)
  };
  const styleClicked = {
    display: "inline",
    borderBottom: "2px solid black",
    padding: "0 10px 15px 10px",
    fontWeight: 500,

    // marginBottom:"5px"
  };
  const styleDefault = {
    display: "inline",
    borderBottom: "none",
    paddingBottom: "15px",
  };
  return (
    <div>
      <header
        style={{
          height: "65px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-around",
          //   margin:"auto"
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ alignSelf: "center", marginRight: "25px" }}>
            <img src={olaLogo} />
          </div>

          <ul
            style={{
              display: "flex",
              color: "white",
              listStyleType: "none",
              padding: "5px",
              fontSize: "13px",
              alignItems: "center",
              fontWeight: 500,
              letterSpacing: ".3px",
            }}
          >
            <li style={{ padding: "5px", margin: "3px", cursor: "pointer" }}>
              Ola S1
            </li>
            <li style={{ padding: "5px", margin: "3px", cursor: "pointer" }}>
              Ola Electric
            </li>
            <li style={{ padding: "5px", margin: "3px", cursor: "pointer" }}>
              Ola Futurefactory
            </li>
          </ul>
        </div>
        <div
          className="header-div2"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 300,
          }}
        >
          <button
            style={{
              backgroundColor: "rgb(55, 54, 53)",
              height: "45px",
              width: "120px",
              border: "none",
              color: "white",
              alignSelf: "center",
              margin: "10px",
              cursor: "pointer",
              letterSpacing: "0.3px",
            }}
          >
            Book an Ola Cab
          </button>
          <button
            style={{
              backgroundColor: "white",
              height: "45px",
              width: "120px",
              border: "none",
              color: "black",
              alignSelf: "center",
              margin: "0 10px",
              cursor: "pointer",
            }}
          >
            Free S1 Test Ride
          </button>
          <div style={{ margin: "10px" }}>
            <img src={hamburger} />
          </div>
        </div>
      </header>
      <div
        style={{
          width: "66%",
          // backgroundColor: "blue",
          margin: "20px auto",
          alignItems: "center",
          paddingTop: "15px",
        }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
            gap: "25px",
            background: "white",
            justifyContent: "space-evenly",
            alignContent: "center",
            height: "40px",
            alignItems: "center",
            
          }}
        >
          <div
            onClick={clickFunction1}
            style={click1 ? styleClicked : styleDefault}
          >
            Daily
          </div>
          <div
            onClick={clickFunction2}
            style={click2 ? styleClicked : styleDefault}
          >
            Rental
          </div>
          <div
            onClick={clickFunction3}
            style={click3 ? styleClicked : styleDefault}
          >
            OutStation
          </div>
        </div>
        <InputDiv click1={click1} click2={click2} click3={click3}/>
      </div>
    </div>
  );
}

export default OlaClone;
