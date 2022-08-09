import { BrowserRouter, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import "./App.css";
import Profile from "./pages/ProfilePage";

const App = () => {
  return (
    <Layout>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/profile" component={Profile} />
    </Layout>
  );
};

export default App;
