import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Add from "./Pages/Add/Add";
import Results from "./Pages/Results/Results";
import SearchToEdit from "./Pages/SearchToEdit/SearchToEdit";
import api from "./api";
import { ThemeProvider, createTheme } from "@mui/material";
import Edit from "./Pages/Edit/Edit";

const theme = createTheme({
  direction: "rtl"
});

function App() {
  const [data, setData] = useState({});
  const [searchResults, setSearchResults] = useState({});
  const [itemToEdit, setItemToEdit] = useState();

  const getData = async () => {
    try {
      const response = await api.getItems();
      setData(response);
    } catch (err) {
      console.error(err);
      // TODO: add error message to the user
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const checkExpertise = (item, dataArray) => {
    return item ? item.every((element) => dataArray.includes(element)) : true;
  };

  const checkLanguage = (item, dataArray) => {
    console.log("langue", item);
    return item.length === 0
      ? true
      : item.some((element) => dataArray.includes(element));
  };

  const checkInput = (item, dataItem) => {
    return item ? item === dataItem : true;
  };

  const filterDietitians = (data, dietExpertise, language, hmo, area) => {
    const result = data.filter((item) => {
      return (
        checkExpertise(dietExpertise, item.dietExpertise) &&
        checkLanguage(language, item.language) &&
        checkInput(hmo, item.hmo) &&
        checkInput(area, item.area)
      );
    });
    if (result.length === 0) {
      console.log("no matches found");
    }
    setSearchResults(result);
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.removeItem(id);
      getData();
    } catch (err) {
      console.error(err);
    }
  };
  const handleEdit = (element) => {
    setItemToEdit(element);
  };

  const submitEdit = async (
    id,
    name,
    phone,
    language,
    dietExpertise,
    hmo,
    area,
    city
  ) => {
    try {
      const response = await api.putItem(id, {
        name: name,
        phone: phone,
        language: language,
        dietExpertise: dietExpertise,
        hmo: hmo,
        area: area,
        city: city
      });
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  const submitForm = async (
    name,
    phone,
    language,
    dietExpertise,
    hmo,
    area,
    city
  ) => {
    try {
      const response = await api.postItem({
        name: name,
        phone: phone,
        language: language,
        dietExpertise: dietExpertise,
        hmo: hmo,
        area: area,
        city: city
      });
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/search"
              element={
                <Search data={data} filterDietitians={filterDietitians} />
              }
            />
            <Route path="/add" element={<Add submitForm={submitForm} />} />
            <Route
              path="/edit"
              element={<Edit itemToEdit={itemToEdit} submitEdit={submitEdit} />}
            />
            <Route
              path="/toEdit"
              element={
                <SearchToEdit
                  data={data}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              }
            />
            <Route
              path="/results"
              element={<Results searchResults={searchResults} />}
            />
            {/* <Route path="/results/:id" element={<DietitianCard/>} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
