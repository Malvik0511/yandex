import Vue from "vue";
import Vuex from "vuex";
import CreatePersistedState from "vuex-persistedstate";

import flights from "./modules/flights";
import filters from "./modules/filters"


Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        // записывает в localStorage состояния из store
        CreatePersistedState({
            paths: [
                "filters.filters.distId",
                "filters.filters.delay"
            ]
        })
    ],

    modules: {
        flights,
        filters
    }
});
