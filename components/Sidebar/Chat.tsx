import { AllUsers, AllUsersType } from "@/types";
import React from "react";

type Props = {
  data: AllUsersType;
};

const Chat: React.FC<Props> = ({ data }) => {
  return (
    <p className="flex items-center justify-between py-4 px-6 border-b bg-white border-gray-400">
      {data.email}
    </p>
  );
};

export default Chat;
