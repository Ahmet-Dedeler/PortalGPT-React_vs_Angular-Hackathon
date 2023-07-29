import React, { useState } from 'react';
import '../styles.css';


export default function Home({ setPage, canvasRef, setChat }) {
  console.log(setChat)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#97978f]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0">
      </canvas>
      <div className="mb-8 text-5xl font-bold text-gray-300 z-10 font-serif">
        Portal GPT
      </div>
      <div className="gap-5 grid">
        <button onClick={() => {
          setPage('Chats');
          setChat('Chef');
        }}
          className="px-6 py-3 text-[#30302d]  bg-[#e0e0b7] rounded hover:bg-[#abab8c] z-10 text-2xl font-serif">
          Chef AI
        </button>
        <button onClick={() => {
          setPage('Chats');
          setChat('Mental Health');
        }}
          className="px-6 py-3 text-[#30302d]  bg-[#e0e0b7] rounded hover:bg-[#abab8c] z-10 text-2xl font-serif">
          Mental Health AI
        </button>
        <button onClick={() => {
          setPage('Chats');
          setChat('Study help');
        }}
          className="px-6 py-3 text-[#30302d]  bg-[#e0e0b7] rounded hover:bg-[#abab8c] z-10 text-2xl font-serif">
          Study AI
        </button>
        <button onClick={() => {
          setPage('Chats');
          setChat('Career Coach');
        }}
          className="px-6 py-3 text-[#30302d]  bg-[#e0e0b7] rounded hover:bg-[#abab8c] z-10 text-2xl font-serif">
          Career Coach
        </button>
      </div>
    </div>
  )
};