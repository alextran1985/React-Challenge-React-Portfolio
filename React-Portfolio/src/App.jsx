import React from "react";
import NavBarSimple from "./components/Navbar";
import Project from "./components/Project";
 
function App() {

  return (
    <>
      <NavBarSimple />
      <div>
        Home Page Content
      </div>
      <Project />
    </>
  );
}

export default App;