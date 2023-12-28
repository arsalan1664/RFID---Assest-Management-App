import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserProtectionProps {
    children : React.ReactNode;
}

function UserProtection({ children }:UserProtectionProps) {
  const navigate = useNavigate();
//   const user = useSelector((state: any) => state.user.isLogin);
  const user = sessionStorage.getItem("user");

  return <> {!user ? children : useEffect(() => navigate("/"), [])} </>;
}

export default UserProtection ;
