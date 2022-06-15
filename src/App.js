import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NewPost from "./Components/NewPost";
import PostsPage from "./Components/PostsPage";
import About from "./Components/About";
import Missing from "./Components/Missing";
import Footer from "./Components/Footer";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <NewPost />
      <PostsPage />
      <About />
      <Missing />
      <Footer/>
    </div>
  );
}

export default App;
