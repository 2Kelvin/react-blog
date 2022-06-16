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
  const [search, setSearch] = useState("");

  return (
    <div className="App"> {/* 'Header, Navbar & Footer' are constant in all pages */}
      <Header title="React JS Blog"/>
      <Navbar search={search} setSearch={setSearch}/>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        
        <Route exact path="/post">
          <NewPost />
        </Route>

        <Route path="/post/:id">
          <PostsPage />
        </Route>

        <Route path="/about" component={About} />
        
        <Route path="*" component={Missing}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
