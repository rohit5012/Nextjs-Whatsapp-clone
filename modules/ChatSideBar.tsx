import Search from "@/components/Search";
import SidebarHeader from "@/components/Sidebar/SidebarHeader";
import Archived from "@/components/Sidebar/SidebarHeader/Archived";
import React from "react";

const ChatSideBar: React.FC = () => {
  return (
    <div className="w-full h-full">
      <SidebarHeader />
      <Search />
      <Archived />
      <p className="text-center text-sm p-2">
        Your personal messages are end-to-end-encrypted
      </p>
    </div>
  );
};

export default ChatSideBar;
