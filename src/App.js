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
import api from "./api/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts"); //unlike fetch, axios automatically sets the response data to JSON
        setPosts(response.data); //axios also automatically catches errors when not in the '200' okay range
      } catch (err) {
        if (err.response) {
          //if response is not in the 200 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchPosts();
   }, []);

  useEffect(() => {
    const filteredResults = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp"); 
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody
    };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      history.push("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      history.push("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
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
