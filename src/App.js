import Home from "./Components/Home";
import NewPost from "./Components/NewPost";
import EditPost from "./Components/EditPost";
import PostsPage from "./Components/PostsPage";
import About from "./Components/About";
import Missing from "./Components/Missing";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Layout from "./Components/Layout";

function App() {
  return (
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="post">
              <Route index element={<NewPost/>} />
              <Route path=":id" element={<PostsPage/>} />
            </Route>
            <Route path="/edit/:id" element={<EditPost/>}/>
            <Route path="about" element={<About/>} />
            <Route path="*" element={<Missing/>}/>
          </Route>
        </Routes>
      </DataProvider>
  );
}

export default App;

//for efficiency, I only wrapped "DataProvider" around those components that use 'a lot' props