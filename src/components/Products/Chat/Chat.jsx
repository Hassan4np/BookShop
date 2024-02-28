import { useEffect } from "react";
import { useState } from "react";
import { BsChatFill } from "react-icons/bs";
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit("message", input);
    setInput("");
  };
console.log(input)
  return (  
    <div className="Fixed">
      <div>
        <div>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div className=" flex justify-end  ">
        <BsChatFill className="text-[50px] text-green-500 mt-28   font-blod absolute " />
      </div>
    </div>
  );
};

export default Chat;
