import React, { useState } from 'react';
import './App.css';
const path = require('./assets/audio/notification.mp3');

function App() {
    const [open, setOpen] = useState<boolean>(false)

  return (
      <div className="App">
          {open &&
              <audio autoPlay>
                    <source src={path} />
              </audio>}
          <button onClick={() => {
              setOpen(true)
              setTimeout(() => {setOpen(false)},1100 )
      }}>press me</button>
    </div>
  );
}

export default App;
