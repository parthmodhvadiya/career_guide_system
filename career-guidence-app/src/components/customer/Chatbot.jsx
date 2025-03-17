import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    const response = await axios.post("/api/chatbot", { message: input });
    setMessages([...messages, { text: input, isUser: true }, { text: response.data.reply, isUser: false }]);
    setInput("");
  };

  return (
    <div>
      <h2>Career Chatbot</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.isUser ? "right" : "left" }}>
            {msg.text}
          </div>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;