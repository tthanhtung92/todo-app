import React from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
  return (
    <main className="h-screen flex flex-col items-center">
      <Header />
      <Todos />
    </main>
  );
};

export default App;
