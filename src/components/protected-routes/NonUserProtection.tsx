import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface NonUserProtectProps {
  children: React.ReactNode;
}

function NonUserProtect({ children }: NonUserProtectProps) {
  const navigate = useNavigate();
  // const user = useSelector((state: any) => state.user.isLogin);
  const user = sessionStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, [user, navigate]);

  return <>{user ? children : null}</>;
}

export default NonUserProtect;
