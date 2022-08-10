import AboutUs from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/ProfilePage";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/about-us", component: AboutUs },
  { path: "/profile", component: Profile },
];

export default routes;
