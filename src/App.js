import React from 'react';
import './App.css';
import Header from './Header';


function App() {
  return (
    <body>
    <Header/>
      <div>
        <div className="center">
          <div className="container">
            <h1>Click the button below to get started!</h1>
          </div>
          <div className="container">
            <button className="submit">Get top songs</button>
          </div>
        </div>
      </div>
    </body>
    );
}

export default App;
