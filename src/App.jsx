import React from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";
import DataComponent from './components/DataComponent';
function App() {
  const data = DataComponent();

  return (
    <div className="app">
      {data.map((image) => (
        <div key={image.id} className="image-container">
          <img src={image.img} alt={`Elephant ${image.id}`} />
          
        </div>
      ))}
    </div>
  );
}

export default App;
