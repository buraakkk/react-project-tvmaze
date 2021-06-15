import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ShowProvider } from "./Contexts/ShowContext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ShowList from "./pages/ShowList";
import PeopleList from "./pages/PeopleList";
import Networks from "./pages/Networks";
import Contact from "./pages/Contact";
import HomePage from "./HomePage";
import ShowDetails from "./ShowDetails";
import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <ShowProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shows" exact component={ShowList} />
            <Route path="/people" exact component={PeopleList} />
            <Route path="/networks" exact component={Networks} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/:id" exact component={ShowDetails} />
          </Switch>
          <Footer />
        </Router>
      </ShowProvider>
    </div>
  );
};

export default App;
