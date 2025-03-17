import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { boxStyle, handleModalChildren } from "./helper";
import { JSX } from "@emotion/react/jsx-runtime";
import { IconModalType } from "./index.interface";
import { ContactsType } from "@/types";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { getSnapshotDoc, usersCollection } from "@/lib/firebase/userController";

type Props = {
  icon: JSX.Element;
  title: string;
  modalType: IconModalType;
};

const AppModal: React.FC<Props> = ({ icon, title, modalType }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [contacts, setContacts] = React.useState<ContactsType[]>([]);

  useEffect(() =>
    onSnapshot(usersCollection, (snapshot: QuerySnapshot<DocumentData>) => {
      setContacts(snapshot.docs.map((doc) => getSnapshotDoc(doc)));
    })
  );
  return (
    <div>
      <div onClick={handleOpen}>{icon}</div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={boxStyle}>
          <h1 className="text-xl font-bold text-black">{title}</h1>
          {handleModalChildren(modalType, contacts, handleClose)}
        </Box>
      </Modal>
    </div>
  );
};

export default AppModal;
