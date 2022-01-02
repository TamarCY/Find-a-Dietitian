import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search"
import Add from "./Pages/Add/Add"
import Results from "./Pages/Results/Results"
import SearchToEdit from "./Pages/SearchToEdit/SearchToEdit"
import api from "./api"



function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    const getData = async () => {
      const response = await api.getItems();
      console.log(response);
      setData(response);
    }
    getData()
  },[])
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search data={data}/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/edit" element={<Add />} />
          <Route path="/toEdit" element={<SearchToEdit/>} />
          <Route path="/results" element={<Results data={data}/>} />
          <Route path="/results/:id" element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
