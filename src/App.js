import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ChartHome from "./pages/ChartHome";
import User from "./pages/User";
import Messaging from "./pages/Messaging";
import Animantion from "./pages/Animantion";

function App() {
  return (
    <BrowserRouter className="App  h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/chartHome/Register" element={<Register />} />
        <Route path="/home" element={<ChartHome />} />
        <Route path="/user" element={<User />} />
        <Route path="/messages" element={<Messaging />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
