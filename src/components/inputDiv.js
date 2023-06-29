import React from "react";
import { InputBase } from "@mui/material";

function inputDiv(props) {
  const { click1, click2, click3 } = props;
  console.log("props", props);
  return (
    <div
      style={{
        backgroundColor: "rgb(244,242,246)",
        height: "100px",
        alignItems: "center",
        display: "flex",
        margin: "-3px 0 0 0px",
      }}
    >
      <div style={{ display: "flex", alignSelf: "center" }}>
        <div
          style={{
            border: "0.1px solid grey",
            // display: "inline",
            height: "52px",
            width: "30px",
            margin: "0 0 0 30px",
            display: "flex",
            alignContent: "center",
            background: "white",
            borderRight: "none",
          }}
        >
          <div
            style={{
              background: "rgb(19, 221, 97)",
              height: "7px",
              width: "7px",
              borderRadius: "50%",
              // top:"13px",
              // display:"inline"
              border: "1px solid rgb(19, 221, 97)",
              position: "relative",
              marginLeft: "15px",
              alignSelf: "center",
            }}
          ></div>
        </div>

        <InputBase
          type="text"
          placeholder="Current Location"
          sx={{
            height: "54px",
            width: "340px",
            margin: "0 0 0 0px",
            alignSelf: "center",
            borderLeft: "none",
            borderBottom: "0.1px solid grey",
            borderTop: "0.1px solid grey",
            borderRight: "none",
            paddingLeft: "10px",
            background:"white"
          }}
        />

        <div
          style={{
            border: "0.1px solid grey",
            // display: "inline",
            height: "52px",
            width: "30px",
            margin: "0 0 0 0px",
            display: "flex",
            alignContent: "center",
            background: "white",
            borderLeft: "none",
          }}
        >
          <img
            width={"50%"}
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/current-location.svg"
          />
        </div>
      </div>

      <div style={{ width: "25px" }}>
        <div
          style={{ width: "25px", borderBottom: "2px solid lightgrey" }}
        ></div>
        <div style={{ width: "25px" }}></div>
      </div>
      <div style={{ display: "flex", alignSelf: "center" }}>
        <div
          style={{
            border: "0.1px solid grey",
            // display: "inline",
            height: "52px",
            width: "30px",
            margin: "0 0 0 0px",
            display: "flex",
            alignContent: "center",
            background: "white",
            borderRight: "none",
          }}
        >
          {click2 ? (
            <div  
            style={{display:"flex",alignItems:"center", justifyContent:"center",marginLeft:"10px"}}
            >
              <img
                 width={"80%"}
                src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/clock.svg"
              />
            </div>
          ) : (
            <div
              style={{
                background: "rgb(226, 103, 59)",
                height: "7px",
                width: "7px",
                borderRadius: "50%",
                // top:"13px",
                // display:"inline"
                border: "1px solid rgb(226, 103, 59)",
                position: "relative",
                marginLeft: "15px",
                alignSelf: "center",
              }}
            ></div>
          )}
        </div>
        <InputBase
        // onChange={()=>style={border:"none"}}
          type="text"
          placeholder={click2 ? "Select Package" : "Enter Destination"}
          sx={{
            height: "54px",
            width: "370px",
            margin: "0 0 0 0px",
            alignSelf: "center",
            border:"none",
            borderLeft: "none",
            borderBottom: "0.1px solid grey",
            borderTop: "0.1px solid grey",
            borderRight: "0.1px solid grey",
            paddingLeft: "10px",
            background:"white"

          }}
        
        />
      </div>
      {/* <button></button> */}
      <div
        style={{
          left: "20px",
          height: "52px",
          width: "300px",
          position: "relative",
          overflow: "visible",
          backgroundColor: "rgb(40, 224, 74)",
          color: "white",
          fontWeight: 700,
          fontSize: "45px",
        }}
      >
        OLA CAB
        <div
          style={{
            height: "52px",
            width: "300px",
            position: "relative",
            backgroundColor: "black",
            opacity: 0.9,
            top: "-55px",
            left: "3px",
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-around",
          }}
        >
          {click1 && (
            <div style={{ margin: "0 0 0 15px" }}>
              SEARCH <span style={{ color: "rgb(40, 224, 74)" }}>OLA CABS</span>
            </div>
          )}
          {click2 && (
            <div style={{ margin: "0 0 0 15px" }}>
              SEARCH{" "}
              <span style={{ color: "rgb(40, 224, 74)" }}>RENTAL CABS</span>
            </div>
          )}
          {click3 && (
            <div style={{ margin: "0 0 0 15px" }}>
              SEARCH{" "}
              <span style={{ color: "rgb(40, 224, 74)" }}>OUTSTATION CABS</span>
            </div>
          )}

          <div style={{ margin: "0 15px 0 auto" }}>
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/forward-arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default inputDiv;
