import React from 'react';
import logo from './logo.svg';
import './App.css';

const colors = ["Красный","Зеленый", "Синий"]
const shoes = [
  {
    name: "Вансы",
    color: colors[1],
    price: 100
  },
  {
    name: "Адики",
    color: colors[0],
    price: 100
  },
  {
    name: "Найкаши",
    color: colors[2],
    price: 100
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { 
          shoes.map( (item) => {
            return (
              <div class="col-md-4">
                <h2 class="shue-title">{item.name}</h2>
                <img
                  class="img-thumbnail"
                  src="https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
                />
                <p>{item.color}</p>
                <p>{item.price}</p>
              </div>    
            )
          })
        }
        <p>
          Темын крутой сайт!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
