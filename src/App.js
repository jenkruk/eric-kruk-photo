import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./Components/Pages/Main";
import { Portfolio } from "./Components/Pages/Portfolio";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import "./App.css"

function App() {

  return (
    <>
    <Router>
    <Navbar />
      <div className="pages">
        <Switch>
          <Route exact path="/" component={ Main }></Route>
          <Route path="/portfolio" component={ Portfolio }></Route>
          <Route path="/about" component={ About }></Route>
          <Route path="/contact" component={ Contact }></Route>
        </Switch>
      </div>
    </Router>
    </>
  );
};

export default App;
