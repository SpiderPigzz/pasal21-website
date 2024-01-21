import HomePage from "pages/Home/Home";
import Error404Page from "pages/Error/E404";
import PricePage from "pages/Price/Price";

const RoutePaths = [
  // {
  //   type: "route",
  //   name: "Landing Page",
  //   key: "landing",
  //   route: "/",
  //   component: <LandingPage />,
  // },

  {
    type: "route",
    name: "Price",
    key: "price",
    route: "/price",
    component: <PricePage />,
  },

  {
    type: "route",
    name: "Home Page",
    key: "home",
    route: "/",
    component: <HomePage />,
  },
  {
    type: "route",
    name: "Error 404",
    key: "error404",
    route: "*",
    component: <Error404Page />,
  },
];

export const getRoute = (key) => {
  return RoutePaths.find((element) => {
    return element.key === key;
  }).route;
};

export const getDynamicRoute = (key, data) => {
  return RoutePaths.find((element) => {
    return element.key === key && element.type === "dynamic route";
  }).route.replace(/:\S+/, data);
};

export default RoutePaths;
