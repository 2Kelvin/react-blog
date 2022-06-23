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
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    const filteredResults = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id++ : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp"); 
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody
    };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    history.push("/");
  };

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
            posts={searchResults}
          />
        </Route>
        
        <Route exact path="/post">
          <NewPost
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            handleSubmit={handleSubmit}
          />
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
