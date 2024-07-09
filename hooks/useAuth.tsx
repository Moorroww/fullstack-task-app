import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { account } from "../lib/appwrite";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleRedirect = (isAuthenticated: boolean) => {
    const publicRoutes = ["/sign-in", "/sign-up"];
    const privateRoutes = ["/"];

    if (isAuthenticated) {
      if (publicRoutes.includes(pathname)) {
        router.push("/");
      }
    } else {
      if (privateRoutes.includes(pathname)) {
        router.push("/sign-in");
      }
    }
  };

  const checkSession = async () => {
    try {
      const session = await account.get();
      setIsAuthenticated(true);
      handleRedirect(true);
    } catch (error) {
      setIsAuthenticated(false);
      handleRedirect(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, [pathname]);

  return isAuthenticated;
};

export default useAuth;
