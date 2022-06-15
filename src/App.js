import Header from "./Components/Header";
import Navbar from "./Components/Header";
import Home from "./Components/Header";
import NewPost from "./Components/Header";
import PostsPage from "./Components/Header";
import About from "./Components/Header";
import Missing from "./Components/Header";
import Footer from "./Components/Header";
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
