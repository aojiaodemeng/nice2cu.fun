// import React from 'react';
import './App.css';
import logo from './bg.jpeg'
import { Button } from 'antd';
function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ background: `url(${logo})` }}>
      </header>
      <body className="App-body" >
      <div className="App-title">Our Journal</div>
        <div className="App-msg">STORIES,INSPIRATION,LIFESTYLE</div>
        <div className="App-prof">
          A Web Developer  
          <Button type="primary">Button</Button>
        </div>
      </body>
    </div>
  );
}

export default App;
