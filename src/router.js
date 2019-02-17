import Vue from "vue";
import Router from "vue-router";

import FlightListView from "./views/FlightListView";
import FlightView from "./views/FlightItemView";
import NotFoundView from "./views/NotFoundView";

Vue.use(Router);

const routes = [
  { name: "home", path: "/", redirect: { name: 'flights' } },
  { name: "flights", path: "/flights", component: FlightListView, },
  { name: "departure", path: "/departure/:id", component: FlightView },
  { name: "arrival", path: "/arrival/:id", component: FlightView },
  { name: "404", path: "/*", component: NotFoundView },
];

const router = new Router({
  mode: "history",
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
});

export default router;
