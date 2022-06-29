import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const Navbar = () => {
    const { search, setSearch } = useContext(DataContext);
    
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={e => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                    id="search" //this is for the label above
                    type="text"
                    placeholder="Search Posts"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>

            <ul> 
                <li> <Link to="/">Home</Link> </li> {/*the link tag is like the <a> tag: however, the link has a "to" attribute insted of "href"*/}
                <li> <Link to="post">Post</Link> </li> {/*links 'tell' the react-router not to request the link from the server but from the proper component*/}
                <li> <Link to="about">About</Link> </li>
            </ul>
        </nav>
    );
}

export default Navbar;