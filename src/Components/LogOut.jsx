import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const [logOut, setLogOut] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function logOut() {
      const data = await axios({
        method: "GET",
        url: "http://localhost:4000/api/v1/users/logout",
      });
      alert(data.data?.message);
      navigate("/");
    }
    logOut();
  }, [logOut, navigate]);

  return <button onClick={() => setLogOut(" ")}>LogOut</button>;
}

export default LogOut;
