"use client";
import { AttachFile, KeyboardVoice, MoodOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";

const MessageInput: React.FC = () => {
  const [messageText, setMessageText] = useState("");
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message sent");
  };
  return (
    <div className="sticky bottom-0 z-10 h-20 bg-gray-200 border-t border-gray-400 flex flex-1 items-center justify-between py-6 px-4">
      <IconButton>
        <MoodOutlined />
      </IconButton>
      <IconButton>
        <AttachFile />
      </IconButton>
      <form onSubmit={sendMessage} className="w-full">
        <input
          type="text"
          className="w-full rounded-lg p-2 outline-none bg-gray-300"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        ></input>
      </form>
      <IconButton>
        <KeyboardVoice />
      </IconButton>
    </div>
  );
};

export default MessageInput;
