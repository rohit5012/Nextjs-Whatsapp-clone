import { ContactsType } from "@/types";
import ChatModal from "./ChatModal";
import UploadModal from "./UploadModal";
import { IconModalType } from "./index.interface";

export const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const handleModalChildren = (
  modalType: IconModalType,
  contacts: ContactsType[],
  handleClose: () => void
) => {
  switch (modalType) {
    case "upload":
      return <UploadModal handleClose={handleClose} />;
    case "chat":
      return <ChatModal contacts={contacts} handleClose={handleClose} />;
    default:
      return;
  }
};
