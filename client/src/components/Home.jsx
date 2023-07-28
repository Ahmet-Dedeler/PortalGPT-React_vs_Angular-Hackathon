import React, { useState } from 'react';

export default function Home({ setPage }) {

  return (
    <div>
    <div>
      this is Home
    </div>
    <button onClick={() => {
      setPage('Chats');
    }
    }>
      click to chat
    </button>
    </div>
  )
};