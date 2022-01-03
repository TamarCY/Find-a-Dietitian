import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search"
import Add from "./Pages/Add/Add"
import Results from "./Pages/Results/Results"
import SearchToEdit from "./Pages/SearchToEdit/SearchToEdit"
import api from "./api"
import {ThemeProvider, createTheme} from "@mui/material"
import DietitianCard from "./Components/DietitianCard/DietitianCard";
import Edit from "./Pages/Edit/Edit";

const theme = createTheme({
  direction: 'rtl',
});

function App() {
  const [data, setData] = useState({})
  const [searchResults, setSearchResults] = useState({})


const getData = async () => {
      try {
      const response = await api.getItems();
      setData(response);
      } catch (err) {
        console.error(err);
        // TODO: add error messsage to the user
    }
  }

  useEffect(()=>{
    getData()
  },[])


  // TODO: think when and how to get data again after push new object to the api


  const checkExpertise = (item, dataArray) => {
    return item.every((element) => dataArray.includes(element))
}

const checkLanguage = (item, dataArray) => {
    return item.some((element)=>dataArray.includes(element))
}

const filterDietitians = (data, dietExpertise, language, hmo, area) => {
    const result = data.filter((item) => { return(
        checkExpertise(dietExpertise ,item.dietExpertise) &&
        checkLanguage(language, item.language) &&
        hmo === item.hmo &&
        area === item.area)
        // TODO: deal with unselected categories 
    })
    if (result.length === 0) {
      console.log("no matches found");
    }
    console.log(result);
    setSearchResults(result)
}

const handleDelete = async (id) => {
  try {
  const response = await api.removeItem(id);
  getData()
  } catch (err){
    console.error(err);
  }

}
  
const submitForm = async (name, phone, language, dietExpertise, hmo, area, city) => {
  try {
  const response = await api.postItem({
      "name": name,
      "phone": phone,
      "language": language,
      "dietExpertise":dietExpertise,
      "hmo": hmo,
      "area": area,
      "city": city
    }
  )
  getData()
  } catch(err){
    console.error(err);
  }

}

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search data={data} filterDietitians={filterDietitians}/>} />
          <Route path="/add" element={<Add submitForm={submitForm}/>} />
          {/* <Route path="/edit" element={<Edit/>} /> */}
          <Route path="/toEdit" element={<SearchToEdit data={data} handleDelete={handleDelete}/>} />
          <Route path="/results" element={<Results searchResults={searchResults}/>} />
          <Route path="/results/:id" element={<DietitianCard/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
