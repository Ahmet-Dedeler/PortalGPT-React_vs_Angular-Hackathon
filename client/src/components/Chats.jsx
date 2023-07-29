import React, { useState, useEffect } from 'react';
import '../styles.css';
import Messages from './Messages.jsx'
import axios from 'axios';

const url = 'http://localhost:3000/message'
var msgCount = 0;

export default function Chats({ setPage, chat }) {

  useEffect(() => {
    axios.post(url, {
      text: `introduce yourself as a ${chat} ai helper with a max of 100 words`
    })
    .then((res) => {
      const introMsg = {
        id: msgCount++,
        user: chat,
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
          user: chat,
          date: new Date().toLocaleString(),
          message: res.data.content
        }

        setMessages(prevMessages => [botMsg, ...prevMessages]);
      }
      );
      inputElement.value = '';
  }

  return (
    <div className="flex flex-col h-screen">
      <div className=" w-full h-1/5 shadow-lg panel">
        <button onClick={(e) => {
          setPage('Home');
        }}
          className="mb-5 ml-5 left-10 h-3/4 aspect-square rounded-full z-10 shadow-lg bg-[#c3c3c3] font-serif text-2xl hover:scale-105 mt-4 text-black">
          Home
        </button>
      </div>
      <div className="h-full w-full flex flex-col items-center">
      <div className="h-full w-full flex flex-col items-center p-2  min-w-[400px] chatbackground">
        <Messages messages={messages} />
        <form className="h-16 w-5/6 flex flex-row items-center max-w-[760px]" onSubmit={submit}>
          <input className="h-full w-5/6 border-black border-solid border-2 mr-4 rounded-lg input" >
          </input>
          <button className="h-3/4 w-1/6 rounded-lg bg-[#c3c3c3] hover:scale-105 font-serif text-2xl">
            Talk
          </button>
        </form>
      </div>
      </div>
    </div>
  )
};