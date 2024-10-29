import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./container/Home/HomePage";
import HomePageAdmin from "./container/Admin/HomePageAdmin";
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
                    <Route exact path="/admin">
                      <HomePageAdmin/>
                    </Route>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
