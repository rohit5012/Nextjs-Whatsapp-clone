import Image from "next/image";
import BackgroundImage from "../public/whatsapp-bg.png";
import ChatSideBar from "@/modules/ChatSideBar";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="w-1/3 overflow-y-auto bg-gray-200">
        <ChatSideBar />
      </div>
      <div className="w-full overflow-y-auto flex items-center justify-center bg-blue-200">
        <Image
          src={BackgroundImage}
          alt="whatsapp-image"
          width={3000}
          height={1000}
        />
      </div>
    </main>
  );
}
