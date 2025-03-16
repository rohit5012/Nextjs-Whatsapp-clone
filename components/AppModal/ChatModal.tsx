import React from "react";
import { ChatModalProps } from "./index.interface";

const ChatModal: React.FC<ChatModalProps> = ({ contacts, handleClose }) => {
  return (
    <div>
      <p>This is a Chat modal</p>
    </div>
  );
};

export default ChatModal;
