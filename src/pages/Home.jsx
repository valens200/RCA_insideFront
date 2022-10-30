import Navbar from "../components/Navbar";
import "../index.css";
import Footer from "../components/Footer";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HomeFooter from "../components/HomeFooter";
function Home() {
  return (
    <div className=" ">
      <Navbar />
      <div className=" main grid items-center h-[60vh] ">
        <div className="container font-bold backdrop-brightness hello w-[60%] mx-auto text-white">
          <div className="App">
            <h1
              style={{
                paddingTop: "5rem",
                margin: "auto 0",
                fontWeight: "normal",
              }}
            ></h1>
          </div>
          <p className="text-[5rem]">
            <Typewriter
              words={[
                "RCA INSIDE",
                "This an online social media ",
                "Designed for educational purpose",
                "To help RCA students to communicate easily",
                "Please join and Inside your friends",
              ]}
              loop={Infinity}
              cursor
              cursorColor="white"
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </p> 
          <div className="w-[100%] fixed bottom-0  text-center items-center h-[5%]">
            <p>
            <Typewriter 
            words={['Valens NIYONSENGA', 'Fullstack software developer']}
            loop={Infinity}
            cursor
            cursorColor="white"
            deleteSpeed={90}
            delaySpeed={1000}
            />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
