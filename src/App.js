import { Route } from "react-router-dom";
import Layout from "./layout/Layout";
import "./App.css";
import routes from "./routes";

const App = () => {
  return (
    <Layout>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Layout>
  );
};

export default App;
