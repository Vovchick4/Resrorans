import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Plates from "./pages/Plates";
import Kitchen from "./pages/Kitchen";
import urls from "./urls";

const routes = [
  {
    path: urls.home,
    exact: true,
    component: Home,
  },
  {
    path: urls.menu,
    exact: true,
    component: Menu,
  },
  {
    path: urls.plates,
    exact: true,
    component: Plates,
  },
  {
    path: urls.kitchen,
    exact: true,
    component: Kitchen,
  },
];

const Routes = routes.map((route) => {
  return route;
});

export default Routes;
