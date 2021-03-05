import React from "react";
import "./Chats.css";

import Chat from "./Chat/Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark Twain"
        message="Yo"
        timestamp="40sec ago"
        profilePic="https://i.pinimg.com/564x/e7/07/46/e707464522fc5de4bfdd906cc4004418.jpg"
      />
      <Chat
        name="Rafeh Qazi"
        message="Whatsup People"
        timestamp="2hrs ago"
        profilePic=""
      />
    </div>
  );
};

export default Chats;
