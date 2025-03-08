import LoginButton from "@/components/Login/LoginButton";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-white">
      <div className="flex items-center gap-10">
        <Image
          src="https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png"
          alt="Whatsapp logo"
          width={200}
          height={200}
        />
      </div>
      <LoginButton />
    </main>
  );
}
