import Blog from "./components/Blog";
import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogsPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Post from "./pages/PostPage";
import Profile from "./pages/ProfilePage";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/about-us", component: AboutUs },
  { path: "/post/:id([0-9]+)?", component: Post },
  { path: "/profile", component: Profile },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
