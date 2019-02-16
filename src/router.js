import Vue from "vue";
import Router from "vue-router";

import FlightListView from "./views/FlightListView";
import FlightView from "./views/FlightItemView";
import NotFoundView from "./views/NotFoundView"

Vue.use(Router);

const routes = [
  { name: "home", path: "/", redirect: { name: 'flights' } },
  { name: "flights", path: "/flights", component: FlightListView, },
  { name: "flight", path: "/flight/:id", component: FlightView },
  { name: "404", path: "/*", component: NotFoundView },
];

const router = new Router({ mode: "history", routes });

export default router;
