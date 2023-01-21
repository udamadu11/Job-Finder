import React from "react";
import Footer from "./Components/Footer/Footer";
import Jobs from "./Components/Job/Jobs";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/Search/Search";
import Value from "./Components/Value/Value";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
