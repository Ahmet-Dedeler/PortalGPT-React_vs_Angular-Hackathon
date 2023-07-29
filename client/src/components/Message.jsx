import React from 'react';

export default function({ user, date, message }) {

  return (
    <div className="flex flex-col">
      <div className={`flex ${user !== 'you' ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="my-2 mx-5">{user}</div>
        <div className="text-xs my-2">{date}</div>
      </div>
      <div className={`${user === 'you' && 'place-self-end'} ${user === 'you' ? 'bg-[#97978f]' : 'bg-[#e1e2e6]'} w-fit px-2 py-4 rounded-md`}>{message}</div>
    </div>
  )
};