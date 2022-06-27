import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NewPost from "./Components/NewPost";
import EditPost from "./Components/EditPost";
import PostsPage from "./Components/PostsPage";
import About from "./Components/About";
import Missing from "./Components/Missing";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <Header title="React JS Blog"/>
      <DataProvider>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/post" component={NewPost}/>
          <Route path="/edit/:id" component={EditPost}/>
          <Route path="/post/:id" component={PostsPage}/>

          <Route path="/about" component={About} />
          
          <Route path="*" component={Missing}/>
        </Switch>
      </DataProvider>
      <Footer/>
    </div>
  );
}

export default App;

//for efficiency, I only wrapped "DataProvider" around those components that use 'a lot' props