import React, { useEffect } from "react";
import { AuthUser } from "../contexts/authContext";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const { user, setAllUsers, allUsers } = AuthUser();

  useEffect(() => {
    async function getAllUsers() {
      const users = await axios({
        method: "GET",
        url: "http://localhost:4000/api/v1/users",
      });
      setAllUsers(users?.data?.data?.users);
    }
    getAllUsers();
  }, [setAllUsers]);

  return (
    <div>
      <p>{"Default" || `Name: ${user.name}`}</p>
      <p>{"Default" || `Email: ${user.email}`}</p>
      <p>{"Default" || `Id: ${user._id}`}</p>
      <br />
      <br />
      {allUsers?.map((user, index) => {
        return (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
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
