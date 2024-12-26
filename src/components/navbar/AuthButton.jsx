"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/provider/AuthProvider";
import { toast } from "@/hooks/use-toast";

const AuthButton = () => {
  const { token, setToken } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    router.push("/login");
    toast({
      title: "Uh oh!",
      description: "You are logged out",
    });
  };

  return (
    <>
      {token ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
};

export default AuthButton;
