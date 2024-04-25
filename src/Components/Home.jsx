import React, { useEffect } from "react";
import { AuthUser } from "../contexts/authContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./Signup";

function Home() {
  const { setAllUsers, allUsers } = AuthUser();

  useEffect(() => {
    async function getAllUsers() {
      const users = await axios({
        method: "GET",
        url: `${BASE_URL}/api/v1/users`,
      });
      setAllUsers(users?.data?.data?.users);
    }
    getAllUsers();
  }, [setAllUsers]);

  return (
    <div>
      {allUsers?.map((user, index) => {
        console.log(user);
        return (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
            <p>{user.weight}</p>
            <p>{user.gender}</p>
          </div>
        );
      })}
      <Link to={"/signup"}>Signup</Link>
      <br />
      <br />
      <Link to={"/"}>Login</Link>
    </div>
  );
}

export default Home;
