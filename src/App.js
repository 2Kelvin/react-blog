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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2022 11:17:36 AM",
      body: "I did this and that and that. What an mazing day it was indeed. "
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "July 02, 2022 8:08:06 PM",
      body: "My week was good but there was this one crazy scenario that happened."
    },
    {
      id: 3,
      title: "My Third Post",
      datetime: "July 03, 2022 06:42:22 AM",
      body: "Nature; the birds, the seals, the waves, the breeze all made the day so beautiful."
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 04, 2022 1:05:20 PM",
      body: "Clothes are an extension to who you are. They describe you to the brim."
    },
  ])
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    history.push("/");
  };

  return (
    <div className="App"> {/* 'Header, Navbar & Footer' are constant in all pages */}
      <Header
        title="React JS Blog"
      />

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Switch>
        <Route exact path="/" >
          <Home
            posts={posts}
          />
        </Route>
        
        <Route exact path="/post">
          <NewPost />
        </Route>

        <Route path="/post/:id">
          <PostsPage
            posts={posts}
            handleDelete={handleDelete}
          />
        </Route>

        <Route path="/about" component={About} />
        
        <Route path="*" component={Missing}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
