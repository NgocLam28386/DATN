import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./container/Home/HomePage";
function App() {
    return (
        <Router>
            <Switch>
                <div className="App">
                    <Route exact path="/">
                        {/* <Header /> */}
                        <HomePage />
                        {/* <Footer /> */}
                    </Route>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
