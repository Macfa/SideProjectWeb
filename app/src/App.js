import './App.css';
import './App.scss';
import HeaderLayout from './layouts/header/HeaderLayout';
import MainLayout from './layouts/main/MainLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <div id="app">
      <HeaderLayout />
      <MainLayout />
    </div>
  );
}

export default App;
