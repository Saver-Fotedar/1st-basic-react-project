import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Navbar />
    <div className="parent">
      <Card user='Aman Singh' age={32} img='https://images.unsplash.com/photo-1761197940460-75fce9b208f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715'/>
      <Card user='Saver Fotedar' age={22} img='https://images.unsplash.com/photo-1760199129864-df2332e3f3e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032'/>
      <Card user='Ritik Manhas' age={19} img='https://images.unsplash.com/photo-1752520316159-741a8d0bde1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=708'/>
      <Card user='Chetan Bhat' age={29} img='https://images.unsplash.com/photo-1760753145427-c327d09ace00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064'/>
      
    </div>
    </>
  );
};

export default App;
