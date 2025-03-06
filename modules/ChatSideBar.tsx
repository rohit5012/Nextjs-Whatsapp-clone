import Search from "@/components/Search";
import Chat from "@/components/Sidebar/Chat";
import SidebarHeader from "@/components/Sidebar/SidebarHeader";
import Archived from "@/components/Sidebar/SidebarHeader/Archived";
import { AllUsers, AllUsersType } from "@/types";
import React from "react";

type Props = {
  data: AllUsers;
};
const ChatSideBar: React.FC<Props> = ({ data }) => {
  const { users } = data;
  return (
    <div className="w-full h-full">
      <SidebarHeader />
      <Search />
      <Archived />
      {!!users &&
        users?.map((user: AllUsersType) => <Chat key={user.id} data={user} />)}
      <p className="text-center text-sm p-2">
        Your personal messages are end-to-end-encrypted
      </p>
    </div>
  );
};

export default ChatSideBar;
