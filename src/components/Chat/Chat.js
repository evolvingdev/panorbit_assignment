import React, { useState, useEffect } from "react";
import "./Chat.css";
import upArrowImg from "../../assets/upload.png";
import chatIcon from "../../assets/message.png";
import downArrow from "../../assets/down-arrow.svg";
function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [showChatWindow, setShowChatWindow] = useState(false);
  const [chatWindowUser, setChatWindowUser] = useState({});
  const [userChatValue, setUserChatValue] = useState(false);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("usersList"));
    setUsersList(users);
    const chatWindow = JSON.parse(localStorage.getItem("chatWindow"));
    setChatWindowUser(chatWindow);
  }, [userChatValue]);

  return (
    <>
      {isChatOpen ? (
        <div className="chatBoxContainerOpen">
          <div className="chatHeaderContainer">
            <div className="chatHeading">
              <img src={chatIcon} alt="" width="32px" height="auto" />
              Chats
            </div>
            <div
              className="upArrowIcon"
              onClick={() => {
                setIsChatOpen(false);
              }}
            >
              <img src={downArrow} alt="" width="20px" height="20px" />
            </div>
          </div>

          <div className="contactList">
            {usersList.map((item, idx) => {
              return (
                <>
                  <div
                    className="record"
                    onClick={() => {
                      localStorage.setItem("chatWindow", JSON.stringify(item));
                      setUserChatValue(item);
                      setShowChatWindow(true);
                    }}
                  >
                    <img
                      src={item.profilepicture}
                      width="30px"
                      height="30px"
                      style={{ borderRadius: "50%" }}
                      alt=""
                    />
                    <span className="chatusername">{item.name}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="chatBoxContainer">
          <div className="chatHeading">
            <img src={chatIcon} alt="" width="32px" height="auto" />
            Chats
          </div>
          <div
            className="upArrowIcon"
            onClick={() => {
              setIsChatOpen(true);
            }}
          >
            <img src={upArrowImg} alt="" width="20px" height="20px" />
          </div>
        </div>
      )}
      {showChatWindow ? (
        <>
          <div className="chatBoxContainerChat">
            <div className="chatHeaderContainer">
              <div className="windowHeading">
                <img
                  src={chatWindowUser.profilepicture}
                  alt=""
                  width="32px"
                  height="auto"
                  style={{ borderRadius: "50%" }}
                />
                <span style={{marginLeft:'10px'}}>{chatWindowUser.name}</span>
              </div>
              <div
                className="upArrowIcon"
                onClick={() => {
                  setShowChatWindow(false);
                }}
              >
                <img src={downArrow} alt="" width="20px" height="20px" />
              </div>
            </div>
            <div className="messages">
              <div className="recieved">
                Lorem ipsum dolor, sit amet, consectuor
              </div>
              <br />
              <div className="recieved">Lorem ipsum dolor, sit amet.</div>
              <div className="time">9:12pm</div>
              <div className="sent">Lorem ipsum dolor sit</div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Chat;
