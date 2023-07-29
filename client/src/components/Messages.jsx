import React from 'react';
import Message from './Message';

export default function Messages() {
  const exampleMessages = [
    {
      id: 8,
      user: 'chatbot',
      message: 'No Problem',
      date: '1 hour ago',
    },
    {
      id: 7,
      user: 'you',
      message: 'Thank you',
      date: '1 hour ago',
    },
    {
      id: 6,
      user: 'chatbot',
      message: 'Sure i can help you',
      date: '1 hour ago',
    },
    {
      id: 5,
      user: 'you',
      message: 'I need help',
      date: '1 hour ago',
    },
    {
      id: 4,
      user: 'chatbot',
      message: 'No Problem',
      date: '1 hour ago',
    },
    {
      id: 3,
      user: 'you',
      message: 'Thank you',
      date: '1 hour ago',
    },
    {
      id: 2,
      user: 'chatbot',
      message: 'Sure i can help you',
      date: '1 hour ago',
    },
    {
      id: 1,
      user: 'you',
      message: 'I need help',
      date: '1 hour ago',
    },
  ];

  return (
    <div className="h-5/6 w-5/6 mb-3 rounded-md px-5 py-2 overflow-scroll flex flex-col-reverse overflow-x-hidden bg-gradient-to-b from-gray-200 shadow-lg">
      {
        exampleMessages.map((message) => <Message key={message.id} user={message.user} date={message.date} message={message.message} />)
      }
    </div>
  )
}