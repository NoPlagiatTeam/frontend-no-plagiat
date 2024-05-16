import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetStoreData } from "../hooks/useGetStoreData";
import { isTokenExpired } from "./checkValidToken";

const AuthChecker = ({ element }) => {
  const navigate = useNavigate();
  const userToken = useGetStoreData("token");

  useEffect(() => {
    if (!userToken || isTokenExpired(userToken)) {
      navigate("/");
    }
  }, [navigate]);

  return <>{userToken && element}</>;
};

export default AuthChecker;
