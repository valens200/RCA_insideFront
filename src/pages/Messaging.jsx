import React from "react";
import HomeNav from "../components/HomeNav";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../features/UserSlice";
import EmojiPicker from "emoji-picker-react";
import { useState, useEffect } from "react";
import { baseSocketUrl } from "../assets/data";
import { stompClient } from "../assets/data";

import {
  BsFillLightningChargeFill,
  BsFileEarmarkImage,
  BsCursorFill,
} from "react-icons/bs";

function Messaging() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.user.users);
  const messages = useSelector((store) => store.message.messages);
  const selectedUser = useSelector((store) => store.user.selected);
  const loggedInUser = useSelector((store) => store.post.loggedInUser);
  const [message, setMessage] = useState("");
  const [emogi, setEmogi] = useState();
  const [mesages, setMesages] = [];
  const [showEmogi, setShowEmogis] = useState(false);

  const getClass = (sent) => {
    if (sent) {
      return "flex mt-3 bg-[#0B0B45] w-[45%]  rounded-b-[1.3rem]  p-2 mr-10  mt-4 flex-start overflow-wrap break-all text-white   mx-auto justify-end";
    } else {
      return "flex  bg-[white] rounded-b-[1.3rem]   bg-[#EBEDEF]   p-2  flex flex-end w-[45%] mt-4 overflow-wrap  break-all   text-start";
    }
  };
  const getMessage2 = (sent) => {
    if (sent) {
      return "flex flex-row justify-end";
    } else {
      return "flex flex-row";
    }
  };
  const getParagraph = (sent) => {
    if (sent) {
      return loggedInUser.userName;
    } else {
      return selectedUser.userName;
    }
  };

  const getRoom = async (id1, id2) => {
    const room = "rca_inside " + id1 + id2 + " chartRoom";
    return room;
  };

  const msg = {
    senderName: "valens",
    receiverName: "vava",
    roon: "rome",
    text: "hello",
  };
  useEffect(() => {
    stompClient.subscribe("/chatroom/public", (payload) => {
      console.log("data", payload);
    });
  });
  const sendMessage = () => {
    stompClient.send("/app/message", {}, JSON.stringify(msg));
  };

  return (
    <div className="h-screen">
      <div className=" w-[100%] bg-white">
        <HomeNav />
      </div>
      <div className="flex  mt-10 h-[70%] w-[100%]  items-center">
        <div className=" mx-auto flex border overflow-y-scroll h-[100%] mt-10  w-[50%]">
          <div className="w-[40%] overflow-y-scroll flex flex-col space-y-4 h-[100%] border">
            <div className="border-b p-4 fixed bg-white w-[19.6%] h-[10%]">
              <p className="font-bold">{loggedInUser.userName}</p>
            </div>
            {loggedInUser.followers == null
              ? null
              : loggedInUser.followers.map((user, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      dispatch(setSelectedUser(user));
                    }}
                    className="w-[100%]  border-t hover:bg-[#EBEDEF] hover:border-0 p-2 h-[9%] mx-auto"
                  >
                    <div className="w-[100%] h-[100%] space-x-6 flex">
                      <img
                        className="w-[16%] h-[5vh] border-black border-[0.2rem] border   rounded-full"
                        src="https://res.cloudinary.com/rwanda-sdfcoding-fdsacademy/image/upload/v1665822504/m63x2r6f8bwfmv5enpmh.png"
                      />
                      <p>{user.userName}</p>
                    </div>
                  </div>
                ))}
          </div>
          <div className="w-[60%] overflow-y-scroll border h-[100%]">
            <div className="w-[100%] p-4 flex flex-col space-y-4  mx-auto">
              <div>
                <div className="w-[29%]  items-center p-2 fixed  bg-white -translate-y-[27%] border-b   h-[10%]  space-x-6 flex">
                  <img
                    className="w-[10%] h-[5vh] border-black border-[0.2rem] border   rounded-full"
                    src="https://res.cloudinary.com/rwanda-sdfcoding-fdsacademy/image/upload/v1665822504/m63x2r6f8bwfmv5enpmh.png"
                  />
                  {selectedUser == null ? (
                    <p>Choose a chart</p>
                  ) : (
                    <p>{selectedUser.userName}</p>
                  )}
                </div>
                <div className="w-[100%]  border hover:bg-[#EBEDEF] hover:border-0  p-4 h-[100%] mx-auto"></div>
              </div>
              {messages.map((mes, index) => (
                <div  onClick={() => setShowEmogis(false) } >
                  <div className={getClass(mes.sent)} key={index}>
                    <p>{mes.message}</p>
                  </div>
                  <div className={getMessage2(mes.sent)}>
                    <img
                      className="w-[7%] rounded-full"
                      src="data:image/jpeg;base64,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"
                    />
                    <p>
                      {selectedUser == null ? null : getParagraph(mes.sent)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="sticky  bottom-40">
                {showEmogi == true ? (
                  <EmojiPicker
                    onEmojiClick={(event, emojiObject) => setEmogi(emojiObject)}
                    height={400}
                    width={300}
                  />
                ) : null}
              </div>
            </div>
            <div className=" w-[100%] sticky bottom-0 broder-t h-[6vh] bg-white ">
              <div className="w-[90%] text-center  h-[100%] flex mx-auto">
                <div className="flex  h-[100%]  b items-center text-[1.4rem] space-x-3 w-[20%]">
                  <BsFileEarmarkImage />
                  <BsFillLightningChargeFill />
                </div>
                <div className="w-[80%] flex items-center  h-[100%]">
                  <div className="w-[10%]  flex space-x-2 h-[50%]">
                    <img
                      onClick={() => setShowEmogis(true)}
                      className="w-[100%]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmbnZWn2Zu9YoWUnDFHMJuY5gBcdKyZD01A&usqp=CAU"
                    />
                  </div>
                  <input
                    onChange={(e) => setMessage(e.target.value)}
                    className="border text-black p-2 focus:outline-0  w-[80%] h-[100%]"
                    type="text"
                    placeholder={
                      selectedUser == null
                        ? " choose a chart "
                        : " Chart with " + selectedUser.userName
                    }
                    valens
                  />
                  <button
                    onClick={() => sendMessage()}
                    className="w-[20%] text-center text-[#00008B] border  font-bold  hover:bg-[#00008B] hover:text-white px-4 text-[1.5rem]   h-[100%] "
                  >
                    <BsCursorFill onClick={() => sendMessage()} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messaging;
