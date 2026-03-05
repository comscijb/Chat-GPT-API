import { useState } from 'react';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';

import { SideMenu } from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';

function App() {

    const [input, setInput] = useState("");
    const [chatlog, setChatlog] = useState([{
        user: "gpt",
        message: "Olá, eu sou o ChatGPT. Como posso ajudar você hoje?"
    }]);

    async function handleSubmit(e) {
      e.preventDefault();

      let response = await makeRequest({ prompt: input });

      const text = response.data; 

      const formatted = text.split('\n').map((line, i) => <p key={i}>{line}</p>);

      setChatlog([...chatlog,
        {user: "me", message: input},
        {user: "gpt", message: formatted}]);
      setInput("");
    }

  return (
    <div className="App">

      <SideMenu></SideMenu>

      <section className="chatbox">

        <div className='chat-log'>
            {chatlog.map((message, index) => (
                <ChatMessage 
                key={index} 
                message={message}>
                </ChatMessage>
            ))}
        </div>

        <div className='chat-input-holder'>

          <form onSubmit={handleSubmit}>

            <textarea
            rows="1"
            className="chat-input-textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem aqui..."
            onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }}}>

            </textarea>

          </form>

        </div>

      </section>

    </div>
  );
}

export default App;
