import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateMovie from './CreateMovie';
import MovieDetails from './MovieDetails';
import MovieRatings from "./MovieRatings";
import UserRatings from "./UserRatings";
import CreateRating from "./CreateRating";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/create/movie">
                            <CreateMovie/>
                        </Route>
                        <Route path="/create/rating">
                            <CreateRating/>
                        </Route>
                        <Route path="/movies/:id">
                            <MovieDetails/>
                        </Route>
                        <Route path="/ratings/users/:id">
                            <UserRatings/>
                        </Route>
                        <Route path="/ratings/movies/:id">
                            <MovieRatings/>
                        </Route>
                        <Route path="*">
                            <p>Page Not Found!</p>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;