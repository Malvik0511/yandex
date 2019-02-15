/**
 * Фильтры рейсов
 */
const state = {
    //текущие фильтры
    filters:{
        distId: 1,
        delay: false
    },
    //возможные направления
    dist: [
        { id: 1, name: "Все", icon: "flight" },
        { id: 2, name: "Вылет", icon: "flight_takeoff"},
        { id: 3, name: "Прилет", icon: "flight_land" },
    ],
};

const mutations = {
    /**
     * установка фильтра напраления
     * @param state
     * @param val
     * @constructor
     */
    SET_DIST_FILTER(state, val) {
        state.filters.distId = val;
    },
    /**
     * установка фильтра задержки рейса
     * @param state
     * @param val
     * @constructor
     */
    SET_DELAY_FILTER(state, val){
        state.filters.delay = val
    },
    /**
     * очистка фильтров
     * @param state
     * @param val
     * @constructor
     */
    CLEAR_FILTERS(state) {
        state.filters.distId = 1;
        state.filters.delay = false
    },
};

const getters = {
    // текущий фильтр направления
    filterDistId: state => {
        return state.filters.distId;
    },
    // текущий фильтр задержки рейса
    filterDelay: state => {
        return state.filters.delay;
    },
    // объект возможных направлений
    filterDistItems: state => {
        return state.dist;
    },
};

export default {
    state,
    mutations,
    getters
};
