import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layouts from "./components/Layout";
import HeadFoot from "./components/HeadFoot";
import './App.css';
import Home from "./pages/Home/home";
import Contacts from './pages/Contacts';
import HouseLease from './pages/HouseLease';
import HouseSell from './pages/HouseSell';
import News from './pages/News';
import Project from './pages/Project';
import InforItem from "./pages/InforItem";
import Signin from "./pages/Account/Signin";
import Login from "./pages/Account/login";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import New from "./pages/News/new";
import Newitem from "./pages/News/news";
import CreatePost from "./pages/CreatePost/CreatePost";



 
function App() {

  return (
    <div className="App" >
      <BrowserRouter>
      <HeadFoot>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Nhadatban" element={<HouseSell />} />
      <Route path="/Nhadatchothue" element={<HouseLease />} />
      <Route path="/Duan" element={<Project />} />
      <Route path="/Tintuc" element={<News />} />
      <Route path="/Danhba" element={<Contacts />} />
      <Route path="/Create_New_Post" element={<CreatePost />} />
      <Route path=":id" element={<InforItem />} />
      <Route path="/Tin" element={<Newitem/>}>
      <Route path=":id" element={<New/>} />
      </Route>
      <Route path="/Dangki" element={<Signin/>}/>
      <Route path="/Dangnhap" element={<Login/>}/>
      </Routes>
      </HeadFoot>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
