"use client";
import {
  AccountCircle,
  DeleteOutlineOutlined,
  LocalPhoneOutlined,
  SearchOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import { ClickAwayListener, IconButton } from "@mui/material";
import React, { useState } from "react";
import SignOutButton from "../common/SignOutButton";

const MainScreenHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  console.log(open, "open");

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="sticky top-0 p-2 h-20 bg-gray-300 border-b border-gray-500 z-10 flex items-center justify-between">
      <div>
        <AccountCircle />
      </div>
      <ClickAwayListener onClickAway={handleClose}>
        <div className="flex gap-6 items-center">
          <IconButton>
            <VideocamOutlined />
          </IconButton>
          <IconButton>
            <LocalPhoneOutlined />
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlined />
          </IconButton>
          <SignOutButton open={open} handleToggle={handleToggle} />
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default MainScreenHeader;
