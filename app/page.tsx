import ChatSideBar from "@/modules/ChatSideBar";

import { getUsers } from "@/lib/firebase/helper";
import MainScreen from "@/modules/MainScreen";

export default async function Home() {
  const fetchedUsers = await getUsers();

  return (
    <main className="flex h-screen overflow-hidden">
      <div className="w-1/3 overflow-y-auto bg-gray-200">
        <ChatSideBar data={fetchedUsers} />
      </div>
      <div className="w-full overflow-y-auto bg-gray-200">
        <MainScreen />
      </div>
    </main>
  );
}
