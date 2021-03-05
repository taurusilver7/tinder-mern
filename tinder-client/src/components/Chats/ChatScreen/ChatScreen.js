import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      img:
        "https://i.pinimg.com/564x/e7/07/46/e707464522fc5de4bfdd906cc4004418.jpg",
      message: "what's up?",
    },
    {
      message: "How's it going",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p>you matched with Ellen on 10/8/20</p>

      {messages.map((msg) =>
        msg?.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__img"
              alt={msg?.name}
              src={msg?.img}
            />
            <p>{msg?.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{msg.message}</p>
          </div>
        )
      )}

      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__field"
            type="text"
            placeholder="Type a message"
          />
          <button
            type="submit"
            onClick={handleSend}
            className="chatScreen__button"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
