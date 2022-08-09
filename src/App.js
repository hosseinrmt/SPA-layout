import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
    </BrowserRouter>
  );
};

export default App;
