import React, { useState } from 'react';

export default function Chats({ setPage }) {

  return (
    <div>
      <button onClick={(e) => {
        setPage('Home');
      }}>
        Home
      </button>
      this is Chats
    </div>
  )
};