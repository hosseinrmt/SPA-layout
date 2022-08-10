import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import "./App.css";
import routes from "./routes";

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
