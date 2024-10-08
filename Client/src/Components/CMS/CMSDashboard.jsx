import React, { useEffect } from "react";
import { useAdminAuth } from "./Utils/useAdminAuth";
import { useNavigate } from "react-router-dom";

const CMSDashboard = () => {
  const navigate = useNavigate();
  const verifyUser = async () => {
    const dataObj = {
      token: localStorage.getItem("token"),
    };

    console.log(dataObj.token);
    const response = await useAdminAuth(dataObj, "verify");
    if (response.status === 200) {
      console.log("User is verified");
    } else {
      navigate("/admin");
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <>
      <p>Dashboard...</p>
    </>
  );
};

export default CMSDashboard;
