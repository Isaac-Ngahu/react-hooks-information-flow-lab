import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
// const labelState=false
  function onDarkModeClick(newState) {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    setNewState(!newState)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
