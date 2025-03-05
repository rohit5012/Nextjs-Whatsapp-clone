"use client";

import {
  AccountCircleOutlined,
  ChatOutlined,
  DataUsageOutlined,
  Groups2Outlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const SidebarHeader: React.FC = () => {
  return (
    <div className="flex justify-evenly items-center px-2 py-2 h-20 border-r border-r-solid border-r-gray-200 border-b border-b-solid border-b-gray-200 bg-white z-10">
      <div className="pl-2">
        <AccountCircleOutlined className="rounded-full cursor-pointer hover:opacity-70 text-gray-500" />
      </div>
      <IconButton>
        <Groups2Outlined />
      </IconButton>
      <IconButton>
        <DataUsageOutlined />
      </IconButton>
      <IconButton>
        <ChatOutlined />
      </IconButton>
    </div>
  );
};

export default SidebarHeader;
