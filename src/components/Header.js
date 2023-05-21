import React from 'react'

function Header({onDarkModeClick}) {
    const [newState,setNewState]=useState(false);
function handleClick(){
    // isDarkMode=false
   onDarkModeClick() 
   setNewState(!newState)
}

  return (
    <header>
    <h2>Shopster</h2>
    <button onClick={handleClick}>
      { newState ? "Dark" : "Light"} Mode
    </button>
  </header>
  )
}

export default Header