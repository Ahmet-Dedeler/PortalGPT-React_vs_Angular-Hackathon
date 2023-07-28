import React, { useState } from 'react';
import '../styles.css';


export default function Home({ setPage }) {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8 text-2xl font-bold text-blue-500">
        This is Home
      </div>
      <button onClick={() => {
        setPage('Chats');
      }}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
        click to chat
      </button>
    </div>
  )
};