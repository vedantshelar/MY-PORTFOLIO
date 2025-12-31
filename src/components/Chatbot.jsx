import { useState,useEffect,useRef } from "react";
import styles from "./Chatbot.module.css";
import { IconMessage, IconX, IconSend, IconMessageChatbot } from "@tabler/icons-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I’m your portfolio assistant. Ask me anything about my skills, projects, or experience."
    }
  ]);
  const [input, setInput] = useState("");

    
  async function sendMessageToBot(userMessage) {
    const res = await fetch("/.netlify/functions/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });
  
    const data = await res.json();
    return data.reply;
  }
  

  const handleSend = async () => {
    if (!input.trim()) return;
  
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
  
    const reply = await sendMessageToBot(input);
  
    setMessages(prev => [...prev, { role: "assistant", content: reply }]);
  };

  function handleOpenAIAssitantBtn(){
    setOpen(true);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  

  return (
    <>
      {/* COLLAPSED CHAT ICON */}
      {!open && (
        <button className={styles.floatingBtn} onClick={handleOpenAIAssitantBtn}>
          <IconMessageChatbot size={22}/> <span className={styles.hideChatbot}>AI Assistant</span>
        </button>
      )}

      {/* EXPANDED CHAT WINDOW */}
      {open && (
        <div className={styles.chatbox}>
          {/* HEADER */}
          <div className={styles.header}>
            <div> 
              <h4>Ask Anything About Me</h4>
              <span>Portfolio Assistant</span>
            </div>
            <button onClick={() => setOpen(false)}>
              <IconX size={18} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.role === "assistant"
                    ? styles.assistant
                    : styles.user
                }`}
              >
                {msg.content}
              </div>
            ))}
                      <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Ask me about my projects, skills, or experience..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>
              <IconSend size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
