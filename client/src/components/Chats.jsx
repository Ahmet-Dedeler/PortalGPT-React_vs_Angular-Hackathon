import React, { useState } from 'react';
import '../styles.css';
import Messages from './Messages.jsx'

export default function Chats({ setPage }) {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" w-full mb-3 h-1/5 shadow-lg">
        <button onClick={(e) => {
          setPage('Home');
        }}
        className="mb-5 ml-5 left-10 h-full aspect-square rounded-full z-10 shadow-lg">
          Home
        </button>
      </div>
        <div className="h-4/6 w-4/6 flex flex-col items-center p-2">
          <Messages />
          <div className="h-16 w-5/6 flex flex-row items-center">
            <input className="h-3/4 w-5/6 border-black border-solid border-2 mr-4 rounded-lg">
            </input>
            <button className="h-3/4 w-1/6 rounded-lg bg-[#97978f]">
              Talk
            </button>
          </div>
        </div>
    </div>
  )
};