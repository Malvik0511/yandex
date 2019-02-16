/**
 * Работа с рейсами
 */
import CommonService from "../../modules/CommonService";

import { SVXcode, defaultFlightList } from "../../modules/constant";

const state = {
    //список рейсов и номер страниц для бесконечной прокрутки
    flight: {
        list: defaultFlightList,
        listPage: 1
    },
};

const mutations = {
    /**
     * устанавливает номер страницы для скролла
     * @param state
     * @param val
     * @constructor
     */
    SET_FLIGHT_LIST_PAGE(state, val){
        state.flight.listPage = val;
    },

    SET_FLIGHT_LIST(state, val){
        state.flight.list = val
    },
    /**
     * следующая страница
     * @param state
     * @constructor
     */
    NEXT_FLIGHT_LIST_PAGE(state){
        state.flight.listPage++;
    }
};

const actions = {
    // запрос к API - отправка письма
    getFlightList({ commit }){
        return new Promise((resolve, reject) => {
            CommonService.request({ station: SVXcode, transport_types: "plane" })
                .then(data => {
                    commit("SET_FLIGHT_LIST", data);
                })
                .catch(reject);
        });
    }
};

const getters = {
    /**
     * возвращает список рейсов
     * @param state
     * @returns {exports.list|list|*[]|VListInstance|HTMLElement}
     */
    flightList: state => {
        return state.flight.list;
    },
    /**
     * возвращает количество страниц
     * @param state
     * @returns {*|number}
     */
    flightListPage:state => {
        return state.flight.listPage;
    },
    /**
     * возвращает рейс по id
     * @param state
     * @returns {function(*): T}
     */
    flight: state => id => {
        return state.flight.list.find(item => item.id === id);
    }


}

export default {
    state,
    mutations,
    actions,
    getters
};
