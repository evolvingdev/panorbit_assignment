import React from "react";
import "./Users.css";
import { Routes, Route, useNavigate } from "react-router-dom";

function Users(props) {
  const navigate = useNavigate();
  
  return (
    <div className="card">
      <div className="headingText">
        <h2>Select an Account</h2>
      </div>
      <div className="accountsList">
        {props.props.map((item, idx) => {
          return (
            <>
              <div
                className="userRecord"
                onClick={() => {
                  navigate("/profile");
                  localStorage.setItem("profile", JSON.stringify(item));
                }}
              >
                <div className="profilePicture">
                  {" "}
                  <img
                    src={item.profilepicture}
                    alt=""
                    width="35px"
                    height="35px"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="username">{item.name}</div>
              </div>
              <div className="line"></div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
