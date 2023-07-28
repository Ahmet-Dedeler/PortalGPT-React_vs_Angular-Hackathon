import React, { useState } from 'react';
import '../styles.css';


export default function Home({ setPage, canvasRef }) {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#ebebeb]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0">
      </canvas>
      <div className="mb-8 text-2xl font-bold text-blue-500 z-10">
        This is Home
      </div>
      <button onClick={() => {
        setPage('Chats');
      }}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 z-10">
        click to chat
      </button>
    </div>
  )
};