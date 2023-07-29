import React, { useState } from 'react';
import Message from './Message';

export default function Messages({messages}) {

  return (
    <div className="h-5/6 w-5/6 mb-3 rounded-md px-5 py-2 overflow-scroll flex flex-col-reverse overflow-x-hidden bg-gradient-to-b from-gray-200 shadow-lg">
      {
        messages.map((message) => <Message key={message.id} user={message.user} date={message.date} message={message.message} />)
      }
    </div>
  )
}