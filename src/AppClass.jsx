import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import DataComponent from "./components/DataComponent";

export default class AppClass extends Component{
  
  

  render() {
    const data = DataComponent();

    return (
      <div className="app">
        <h2>Kalvium gallary</h2>
        <div className="image-grid"> {/* Use image-grid class */}
          {data.map((image) => (
            <div key={image.id} className="image-container">
              <img src={image.img} alt={`Elephant ${image.id}`} />
         
            </div>
          ))}
        </div>
      </div>
    );
  }
}

