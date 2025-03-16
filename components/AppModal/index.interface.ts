import { ContactsType } from "@/types";

export type IconModalType = "upload" | "chat";

export type ChatModalProps = {
  contacts: ContactsType[];
  handleClose: () => void;
};

export type UploadModalType = {
  handleClose: () => void;
};
