import { useRouter  } from "next/router";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthService } from "../service/auth-service";

const withAuth = (WrappedComponent: any) => {
  const Auth = (props: any) => {
    const router = useRouter();
    const [ isloading , setIsLoading] = useState(true);

    useEffect(() => {
      const isLoggedIn = AuthService.isLogged();

      if (!isLoggedIn) {
        router.push("/login/login");
      }
      else {
        setIsLoading(false);
      }
    }, []);

    return isloading ? <div>Loading...</div> : <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;
