import React from 'react';
import Guestbook from './Guestbook';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <header style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>My Personal Profile</h1>
        <p>Welcome to my website!</p>
      </header>
      <main style={{ padding: '20px' }}>
        <Guestbook />
      </main>
    </div>
  );
}

export default App;
