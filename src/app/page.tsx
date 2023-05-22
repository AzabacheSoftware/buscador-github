"use client";

import FormSearchUser from "@/components/FormSearchUser";
import UserCardInfo from "@/components/UserCardInfo";
import { useState } from "react";
import { User } from "@/interfaces/user";



const Home = () => {

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
  
    if (!res.ok) {
      setUser(null);
      setError("❌ Usuario no encontrado...")
      return;
    }

    setUser(await res.json());
  }


  return (
    <>
      <FormSearchUser getUser={getUser} />
      {user && <UserCardInfo user={user} />}
      {
      error && <p className=" bg-blue-900 text-white p-2 font-bold mt-2 mb-4 text-sm rounded-lg shadow-md shadow-blue-400/25 text-center">{error}</p>
      }
       

    </>
  );
};
export default Home;
