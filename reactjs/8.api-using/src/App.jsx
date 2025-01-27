import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data.id);
  };

  const getUserByIda = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    //post veri eklemek icin kullanilir
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    // put veri guncellemek icin kulllanilir
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deletedUserById = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  };

  const getPostById = async (postId) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    return response.data;
  };

  const getPost = async () => {
    var postId = await getUserById(1);
    // const postdata = await getPostById(postId);
    // console.log(postdata);
    console.log(postId);
    const postdata = await getPostById(7);
    console.log(postdata);
  };
  useEffect(() => {
    // getAllUsers();
    // getUserById(3);
    //--------------------------------
    // const newUser = {
    //   id: 4,
    //   username: "bilal",
    //   password: "1234",
    // };
    // createUser(newUser);
    //--------------------------------
    // updateUser("4", {
    //   username: "arhan",
    //   password: "54213",
    // });
    //--------------------------------
    // deletedUserById("4");

    getPost();
  }, []);

  return <div></div>;
}

export default App;
