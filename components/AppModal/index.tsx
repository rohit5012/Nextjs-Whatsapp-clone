import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { boxStyle } from "./helper";
import { JSX } from "@emotion/react/jsx-runtime";

type Props = {
  icon: JSX.Element;
  title: string;
  modalType: string;
};

const AppModal: React.FC<Props> = ({ icon, title, modalType }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div onClick={handleOpen}>{icon}</div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={boxStyle}>
          <h1 className="text-xl font-bold">{title}</h1>
        </Box>
      </Modal>
    </div>
  );
};

export default AppModal;
