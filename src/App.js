import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ChartHome from "./pages/ChartHome";
import Messaging from "./pages/Messaging";
import Animantion from "./pages/Animantion";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter className="App  h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<ChartHome />} />
        <Route  path="/profile" element={<Profile />} />
        <Route path="/chart" element={<Messaging />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
