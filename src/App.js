import './App.css';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import Aggregator from './Aggregator';
import data from './data';
import React from "react";

function App() {
  const { dishes } = data;
  const [menuItems, setMenuItems] = useState([]);

  const onAdd = (dish) => {
    const exist = menuItems.find((x) => x.id === dish.id);
    // logically increment cart items if already exists in the car
    if (exist) {
      console.log('add');
      const newMenuItems = menuItems.map((x) =>
        x.id === dish.id ? {...exist, qty: exist.qty + 1} : x
      );
      setMenuItems(newMenuItems);
    }
    else {
      const newMenuItems = [...menuItems, {...dish, qty: 1}];
      setMenuItems(newMenuItems);
      console.log('add');
    }
  };
  const onRemove = (dish) => {
    const exist = menuItems.find((x) => x.id === dish.id);
      if (exist.qty === 1) {
        const newMenuItems = menuItems.filter((x) => x.id !== dish.id);
        setMenuItems(newMenuItems);
      }
      else {
        const newMenuItems = menuItems.map((x) =>
          x.id === dish.id ? {...exist, qty: exist.qty - 1} : x
        );
        setMenuItems(newMenuItems);
      }
  }
  return (
    <div>
      <header className="header">
        <h1>Thanksgiving Menu Builder</h1>
      </header>
      <div class="full-container">
        <img src={'headerimg.jpg'} className="image" alt="image" /> 
      </div>
      <div class="body">
          <h2>
            Welcome to my Thanksgiving Menu Builder!
          </h2>
          <p>
            Please select the items you'd like to make for your Thanksgiving feast. This tool will help you determine the total prep & cook time, as well as the total cost required by all the food you want to make.  
          </p>
      </div>
          <div className='row'>
            <Menu 
              menuItems={menuItems}
              dishes={dishes} 
              onAdd={onAdd} 
              onRemove={onRemove}
            />
            <Aggregator 
              menuItems={menuItems}
              countMenuItems={menuItems.length} 
              onAdd={onAdd} 
              onRemove={onRemove}
              />
          </div>
    </div>
  );
}

export default App;
