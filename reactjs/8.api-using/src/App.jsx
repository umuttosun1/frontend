import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { use } from "react";

const BASE_URL = "http://localhost:3000";

function App() {
  //async ve await kullanimi api islemleri bittikten sonra asagidaki kod bloklari calismasi icin
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (id) => {
    const response = await axios.get(BASE_URL + "/users/" + id);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    //Post veri eklemek icin kullanilir
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response);
  };

  const updateUser = async (userId, updatedUser) => {
    // PUT : veri guncellemek icin kullanilir/
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deleteUser = async (userId) => {
    //Delete : veri silmek icin kullanilir
    await axios.delete(`${BASE_URL}/users/${userId}`);
  };
  useEffect(() => {
    // getAllUsers();
    // getUserById(1);
    // CREATE
    // const newUser = {
    //   username: "diyar",
    //   password: "1234",
    // };
    // createUser(newUser);
    // UPDATE
    // updateUser("6772", {
    //   username: "deniz",
    //   password: "12345",
    // });
    // DELETE
    // deleteUser("41ab");
  }, []);
  return <div></div>;
}

export default App;
