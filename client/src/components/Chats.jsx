import React, { useState, useEffect } from 'react';
import '../styles.css';
import Messages from './Messages.jsx'
import axios from 'axios';

const url = 'http://localhost:3000/message'
var msgCount = 0;

export default function Chats({ setPage, chat }) {
  console.log(chat)
  useEffect(() => {
    axios.post(url, {
      text: `introduce yourself as a ${chat} ai helper with a max of 100 words`
    })
    .then((res) => {
      const introMsg = {
        id: msgCount++,
        user: 'chatbot',
        date: new Date().toLocaleString(),
        message: res.data.content
      }
      setMessages(prevMessages => [introMsg, ...prevMessages]);
    }
    )
  }, [])

  const [messages, setMessages] = useState([]);
  const submit = (e) => {
    e.preventDefault();


    const inputElement = document.querySelector('.input');
    const input = inputElement.value;
    const usrMsg = {
      id: msgCount++,
      user: 'you',
      date: new Date().toLocaleString(),
      message: input
    }
    setMessages(prevMessages => [usrMsg, ...prevMessages]);



    axios.post(url, {
      text: input
    })
      .then((res) => {
        const botMsg = {
          id: msgCount++,
          user: 'chatbot',
          date: new Date().toLocaleString(),
          message: res.data.content
        }

        setMessages(prevMessages => [botMsg, ...prevMessages]);
      }
      );
      inputElement.value = '';
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" w-full mb-3 h-1/5 shadow-lg p-5 panel">
        <button onClick={(e) => {
          setPage('Home');
        }}
          className="mb-5 ml-5 left-10 h-full aspect-square rounded-full z-10 shadow-lg bg-white">
          Home
        </button>
      </div>
      <div className="h-4/6 w-full flex flex-col items-center">
      <div className="h-full w-4/6 flex flex-col items-center p-2 max-w-[760px] min-w-[400px]">
        <Messages messages={messages} />
        <form className="h-16 w-5/6 flex flex-row items-center" onSubmit={submit}>
          <input className="h-3/4 w-5/6 border-black border-solid border-2 mr-4 rounded-lg input" >
          </input>
          <button className="h-3/4 w-1/6 rounded-lg bg-[#97978f]">
            Talk
          </button>
        </form>
      </div>
      </div>
    </div>
  )
};