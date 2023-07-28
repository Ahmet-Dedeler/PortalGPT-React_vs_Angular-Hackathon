import React, { useState } from 'react';
import Home from './Home';
import Chats from './Chats';

export default function App() {
  const [page, setPage] = useState('Home');

  return (
    <div id="App">
      <div>
      {(page === 'Home') && (<Home setPage={(e) => { setPage(e); }}/>)}
      {(page === 'Chats') && (<Chats setPage={(e) => { setPage(e); }}/>)}
    </div>
    </div>
  );
}