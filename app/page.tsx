import Image from "next/image";
import BackgroundImage from "../public/whatsapp-bg.png";
import ChatSideBar from "@/modules/ChatSideBar";
import { AllUsers } from "@/types";

const getUsers = async () => {
  const staticData = await fetch("https://dummyjson.com/users", {
    cache: "force-cache",
  });

  const dynamicData = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
  });

  const revalidateData = await fetch("https://dummyjson.com/users", {
    next: { revalidate: 10 },
  });
  const userData: AllUsers = await dynamicData.json();
  return userData;
};

export default async function Home() {
  const fetchedUsers = await getUsers();

  return (
    <main className="flex h-screen overflow-hidden">
      <div className="w-1/3 overflow-y-auto bg-gray-200">
        <ChatSideBar data={fetchedUsers} />
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
