import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The BoxOffice Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create/movie">New Movie</Link>
          <Link to="/create/rating">New Rating</Link>

        </div>
      </nav>
    );
  }
   
  export default Navbar;