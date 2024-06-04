// Import data
import React from "react";
import SearchBar from "./searchBar";
import Directory from "./directory";
import Gallery from "./gallery";
import Sidebar from "./sidebar";

// Import components
import "./App.css";

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Sidebar />
        <SearchBar />
        <Directory />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
