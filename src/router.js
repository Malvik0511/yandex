import Vue from "vue";
import Router from "vue-router";

import FlightListView from "./views/FlightListView";
import FlightView from "./views/FlightItemView";

Vue.use(Router);

const routes = [
  { name: "home", path: "/", redirect: { name: 'flights' } },
  { name: "flights", path: "/flights", component: FlightListView, },
  { name: "flight", path: "/flight/:id", component: FlightView }
];

const router = new Router({ mode: "history", routes });

export default router;
