// import React from "react";
// import { useState, useEffect } from "react";
// import { over } from "stompjs";
// import SockJS from "sockjs-client";

// function Room() {
//   const [tab, setTab] = useState(["CHATROOM"]);
//   const [publicChats, setPublicCharts] = useState([]);
//   const [privateChats, setPrivateCharts] = useState([]);
//   const [ conneced, setConnected ] =  useState(false);
//   const tabs = [ 'CHARTROOM', "General"]
//   const [userData, setUserData] = useState({
//     username: "",
//     receivername: "",
//     connected: false,
//     message: "",
//   });

//   let stompClient;
//   const sendPrivateValue = () => {};
//   const handleMessage = () => {};
//   const sendValue = () => {};
//   const handleUsername = (data) => {
//     setUserData({ ...userData, username: data });
//     console.log(userData.username);
//   };
//   const registerUser = (data) => {
//     const socket = new SockJS("http://localhost:8080/ws");
//     const stompClient = over(socket);
//     stompClient.connect(
//       {},
//       (payload) => {
//         console.log("conneced");
//         stompClient.subscribe("/chatroom/public", (data) => {
//             console.log(" data ", data)
//         })
//         console.log(payload);
//         setConnected(true)
//          tabs.push(userData.username)
//         console.log("tabs " , tab)
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   };
//   return (
//     <div className="container">
//       {conneced ? (
//         <div className="chat-box">
//           <div className="member-list">
//             <ul>
//                 {tabs.map((tab, index) => (
//                     <li key={index}>{tab}</li>
//                 ))}
//             </ul>
//           </div>
//           {tab === "CHATROOM" && (
//             <div className="chat-content">
//               <ul className="chat-messages">
//                 {publicChats.map((chat, index) => (
//                   <li
//                     className={`message ${
//                       chat.senderName === userData.username && "self"
//                     }`}
//                     key={index}
//                   >
//                     {chat.senderName !== userData.username && (
//                       <div className="avatar">{chat.senderName}</div>
//                     )}
//                     <div className="message-data">{chat.message}</div>
//                     {chat.senderName === userData.username && (
//                       <div className="avatar self">{chat.senderName}</div>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <div className="send-message">
//                 <input
//                   type="text"
//                   className="input-message"
//                   placeholder="enter the message"
//                   value={userData.message}
//                   onChange={handleMessage}
//                 />
//                 <button
//                   type="button"
//                   className="send-button"
//                   onClick={sendValue}
//                 >
//                   send
//                 </button>
//               </div>
//             </div>
//           )}
//           {tab !== "CHATROOM" && (
//             <div className="chat-content">
//               <ul className="chat-messages">
//                 {privateChats.map((chat, index) => (
//                   <li
//                     className={`message ${
//                       chat.senderName === userData.username && "self"
//                     }`}
//                     key={index}
//                   >
//                     {chat.senderName !== userData.username && (
//                       <div className="avatar">{chat.senderName}</div>
//                     )}
//                     <div className="message-data">{chat.message}</div>
//                     {chat.senderName === userData.username && (
//                       <div className="avatar self">{chat.senderName}</div>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <div className="send-message">
//                 <input
//                   type="text"
//                   className="input-message"
//                   placeholder="enter the message"
//                   value={userData.message}
//                   onChange={handleMessage}
//                 />
//                 <button
//                   type="button"
//                   className="send-button"
//                   onClick={sendPrivateValue}
//                 >
//                   send
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="register">
//           <input
//             id="user-name"
//             placeholder="Enter your name"
//             name="userName"
//             onChange={(e) => handleUsername(e.target.value)}
//             margin="normal"
//           />
//           <button type="button" onClick={registerUser}>
//             connect
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Room;
