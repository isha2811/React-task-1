import React from "react";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Newpage from "./components/PageNotFound/Newpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import useToken from "./useToken";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <Router>
        <div className="Nav">
          <div className="logo">
            <h1>Learning Diva</h1>
          </div>
          <div className="nav-bar">
            <ul>
              <Link to="/login">
                <li>
                  {" "}
                  <button className="button-33" role="button">
                    {" "}
                    Login
                  </button>
                </li>
              </Link>
              <Link to="/register">
                <li>
                  <button className="button-33" role="button">
                    {" "}
                    Register{" "}
                  </button>{" "}
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <Switch>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/register"><Register setToken ={setToken}/></Route>
          <Route path="/" component={Newpage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }

  return (
    <div className="wrapper">
      <Navbar  setToken={setToken}/>
      <Footer />
    </div>
  );
}

export default App;
