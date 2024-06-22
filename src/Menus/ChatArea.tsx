import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustButton from "../components/CustButton";
import arrowBack from "./../assets/Arrow Icon.png";
import phone from "./../assets/Phone Icon.png";
import send from "./../assets/Path 8.png";

import srk from "./../assets/srk.png";
import tom from "./../assets/Tom Crus.png";

interface Message {
  id: number;
  sender: "me" | "other";
  text: string;
}
const ChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "other",
      text: "Hey! How are you? It's been a while. How is your travel to UK?",
    },
    { id: 2, sender: "me", text: "Hey too!" },
    {
      id: 3,
      sender: "other",
      text: "Its great, UK is awesome, especially London. New job is good so far! How about you?",
    },
    {
      id: 4,
      sender: "me",
      text: "I'm fine, I'm thinking about a new project. I want to open an online store",
    },
    {
      id: 5,
      sender: "me",
      text: "But I don't know what to sell. Maybe I will sell stones and water",
    },
    {
      id: 6,
      sender: "other",
      text: "Yeah it's a great idea, you know - everyone needs water, I don't know about stones xD",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: "me" as "me",
      text: newMessage,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex justify-between items-center border-b-2 p-4">
          <Link to="/Followers">
            <CustButton
              className="py-3 px-2 mr-4 bg-green-500 hover:bg-green-700 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              children={undefined}
              childrenImage={arrowBack}
              classNameImage="px-2"
              onClick={() => {}}
            />
          </Link>
          <div className="text-center">
            <Link to="/Profile">
              <h1 className="flex font-medium text-xl items-center ">
                <span className="rounded-full bg-green-500 h-2 w-2 mr-2" />
                @tomcruiser
              </h1>
              <h6 className="text-gray-400">Last active 10 sec ago</h6>
            </Link>
          </div>
          <div className="ml-auto">
            <div className="rounded-full bg-green-100 py-2 px-2">
              <img src={phone} alt="Phone" />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "me" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              {message.sender === "other" && (
                <img
                  src={srk}
                  alt="Other Avatar"
                  className="h-8 w-8 rounded-full mr-2"
                />
              )}
              <div
                className={`p-3 rounded-lg ${
                  message.sender === "me"
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </div>
              {message.sender === "me" && (
                <img
                  src={tom}
                  alt="User Avatar"
                  className="h-8 w-8 rounded-full ml-2"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center p-4 border-t">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
            placeholder="Say something"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 p-2 bg-green-500 text-white rounded-full shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            <img src={send} alt="Send" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
