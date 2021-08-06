import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Navbar } from "./Navbar";
import { AboutPage } from "./pages/AboutPage";
import { TodoPage } from "./pages/TodoPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodoPage} path={"/"} exact />
          <Route component={AboutPage} path={"/about"} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
