import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Mindmap from "./pages/Mind-map";
import Home from "./pages/Home";
import Container from "./components/Container";

const AppRouter = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/mind-map" component={Mindmap} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
};

export default AppRouter;
