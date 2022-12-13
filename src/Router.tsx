import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Mindmap from "./pages/Mind-map";
import Home from "./pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/map" component={Mindmap} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
