import { useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { useRouter } from "next/navigation";

const useUser = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      const userData = await account.get();
      setUser({
        id: userData.$id,
        name: userData.name,
        email: userData.email,
      });
    } catch (error) {
      setUser(undefined);
      router.push("/sign-in");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user };
};

export default useUser;
