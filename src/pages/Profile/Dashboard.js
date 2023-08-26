import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Chat from "../../components/Chat/Chat";
import Profile from "./Tabs/Profile";
import Gallery from "./Tabs/Gallery";
import Posts from "./Tabs/Posts";
import ToDo from "./Tabs/ToDo";

function Dashboard(props) {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [profileDetails, setProfileDetails] = useState({});
  const [hideModal, setHideModal] = useState(true);

  useEffect(() => {
    const profile = localStorage.getItem("profile");
    setProfileDetails(JSON.parse(profile));
    localStorage.setItem("tab", "Profile");
  }, []);
  
  const Modal = (
    <>
      <div className={hideModal ? "hideModalBody" : "modalBody"}>
        <div className="profilePicture">
          <img
            src={profileDetails.profilepicture}
            width="100px"
            style={{
              borderRadius: "50%",
              width: "100px",
              height: "auto",
              marginTop: "50px",
            }}
            alt=""
          />
        </div>
        <div className="popupProfileName">{profileDetails.name}</div>
        <div className="popupEmail">{profileDetails.email}</div>
        <div className="button" onClick={() => navigate("/")}>
          Sign out
        </div>
      </div>
    </>
  );
  return (
    <div className="parentProfilePage">
      {Modal}
      <Chat />
      <div className="sideBar">
        <div
          className={
            localStorage.getItem("tab") === "Profile" ? "selectedTab" : "tab"
          }
          onClick={() => {
            localStorage.setItem("tab", "Profile");
            isSelected ? setIsSelected(false) : setIsSelected(true);
          }}
        >
          Profile
        </div>
        <div className="line"></div>
        <div
          className={
            localStorage.getItem("tab") === "Posts" ? "selectedTab" : "tab"
          }
          onClick={() => {
            localStorage.setItem("tab", "Posts");
            isSelected ? setIsSelected(false) : setIsSelected(true);
          }}
        >
          Posts
        </div>
        <div className="line"></div>
        <div
          className={
            localStorage.getItem("tab") === "Gallery" ? "selectedTab" : "tab"
          }
          onClick={() => {
            localStorage.setItem("tab", "Gallery");

            isSelected ? setIsSelected(false) : setIsSelected(true);
          }}
        >
          Gallery
        </div>
        <div className="line"></div>
        <div
          className={
            localStorage.getItem("tab") === "Todo" ? "selectedTab" : "tab"
          }
          onClick={() => {
            localStorage.setItem("tab", "Todo");
            isSelected ? setIsSelected(false) : setIsSelected(true);
          }}
        >
          ToDo
        </div>
        <div className="line"></div>
      </div>
      <div className="mainScreen">
        {/* <Profile /> */}
        <div className="header">
          <span className="miniHeading">{localStorage.getItem("tab")}</span>
          <div
            className="account"
            onClick={() =>
              hideModal ? setHideModal(false) : setHideModal(true)
            }
          >
            <img
              src={profileDetails.profilepicture}
              width="35px"
              height="35px"
              style={{ borderRadius: "50%" }}
              alt=""
            />
            {profileDetails.name}
          </div>
        </div>
        <div className="line"></div>
        {localStorage.getItem("tab") === "Profile" && <Profile />}
        {localStorage.getItem("tab") === "Gallery" && <Gallery />}
        {localStorage.getItem("tab") === "Posts" && <Posts />}
        {localStorage.getItem("tab") === "Todo" && <ToDo />}
      </div>
    </div>
  );
}

export default Dashboard;
