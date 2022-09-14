import React from "react";
import Giphy from "./Components/Giphy";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {

  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/"
      element={
        <Giphy></Giphy>
      }></Route>
    </Routes>
    </BrowserRouter>
    </>

  );
};



export default App;
