import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search"
import Add from "./Pages/Add/Add"
import Results from "./Pages/Results/Results"
import SearchToEdit from "./Pages/SearchToEdit/SearchToEdit"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/add" element={<Add/>} />
          <Route path="/edit" element={<Add />} />
          <Route path="/toEdit" element={<SearchToEdit/>} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/:id" element={<Search/>} />






        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
