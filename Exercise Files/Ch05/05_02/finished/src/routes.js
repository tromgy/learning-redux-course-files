import React from "react";
import { Switch, Route, IndexRoute } from "react-router";
import { HashRouter } from "react-router-dom";
import { App, Whoops404 } from "./components";
import SkiDayCount from "./components/containers/SkiDayCount";
import AddDayForm from "./components/containers/AddDayForm";
import SkiDayList from "./components/containers/SkiDayList";

const routes = (
  <HashRouter>
    <App>
      <Switch>
        <Route exact path="/" component={SkiDayCount} />
        <Route path="/add-day" component={AddDayForm} />
        <Route path="/list-days/:filter" component={SkiDayList} />
        <Route path="/list-days" component={SkiDayList} />
        <Route path="*" component={Whoops404} />
      </Switch>
    </App>
  </HashRouter>
);

export default routes;
