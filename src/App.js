import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import ToDo from './components/toDo';
import DragComponent from './components/dragComponent';
import DragHorizontal from './components/dragHorizontal'


function App() {

  const [showDrag, setShowDrag] = useState(false);
  return (
    <div className="App">
      
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>React DragDrop</div>
      <div className={`showBtn`}>
        <button onClick={() => setShowDrag(!showDrag)}>Toggle Drag Component</button>
      </div>
      {/* <ToDo /> */}
      {
        showDrag ? 
        <div className="customApp">
          <DragHorizontal />
        </div> : 
        <div className="customApp">
          <DragComponent />
        </div>
      }
    </div>
  );
}

export default App;
