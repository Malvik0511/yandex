/**
 * Работа с рейсами
 */
import CommonService from "../../modules/CommonService";

import { SVXcode } from "../../modules/constant";

const state = {
    flightList: [
        {id: 1, departureTime: "18: 00", realDepartureTime: "18: 10", arriveTime: "20: 00", realArriveTime: "20: 10", flight: "123", company:["S1"], status: "Приземлился", delay: true, "from": "Екатеринбург", "to":"Таганрог" },
        {id: 2, departureTime: "18: 10", realDepartureTime: "18: 10", arriveTime: "20: 30", realArriveTime: "20: 20", flight: "125", company:["S2"], status: "Приземлился", delay: false, "from": "Екатеринбург", "to":"Минск" },
        {id: 3, departureTime: "18: 20", realDepartureTime: "18: 20", arriveTime: "22: 00", realArriveTime: "22: 10", flight: "133", company:["S3"], status: "Приземлился", delay: true, "from": "Перьм", "to":"Екатеринбург" },
        {id: 4, departureTime: "18: 30", realDepartureTime: "18: 40", arriveTime: "20: 00", realArriveTime: "20: 00", flight: "523", company:["S4"], status: "Приземлился", delay: false, "from": "Владивосток", "to":"Екатеринбург" },
        {id: 5, departureTime: "18: 50", realDepartureTime: "20: 10", arriveTime: "23: 00", realArriveTime: "00: 10", flight: "323", company:["S5"], status: "В полете", delay: true, "from": "Екатеринбург", "to":"Москва" },
        {id: 6, departureTime: "19: 00", realDepartureTime: "19: 00", arriveTime: "23: 00", realArriveTime: "23: 10", flight: "453", company:["S6"], status: "Приземлился", delay: true, "from": "Москва", "to":"Екатеринбург" },
        {id: 7, departureTime: "18: 00", realDepartureTime: "18: 10", arriveTime: "20: 00", realArriveTime: "20: 10", flight: "123", company:["S1"], status: "Приземлился", delay: true, "from": "Екатеринбург", "to":"Таганрог" },
        {id: 8, departureTime: "18: 10", realDepartureTime: "18: 10", arriveTime: "20: 30", realArriveTime: "20: 20", flight: "125", company:["S2"], status: "Приземлился", delay: false, "from": "Екатеринбург", "to":"Минск" },
        {id: 9, departureTime: "18: 20", realDepartureTime: "18: 20", arriveTime: "22: 00", realArriveTime: "22: 10", flight: "133", company:["S3"], status: "Приземлился", delay: true, "from": "Перьм", "to":"Екатеринбург" },
        {id: 10, departureTime: "18: 30", realDepartureTime: "18: 40", arriveTime: "20: 00", realArriveTime: "20: 00", flight: "523", company:["S4"], status: "Приземлился", delay: false, "from": "Владивосток", "to":"Екатеринбург" },
        {id: 11, departureTime: "18: 50", realDepartureTime: "20: 10", arriveTime: "23: 00", realArriveTime: "00: 10", flight: "323", company:["S5"], status: "В полете", delay: true, "from": "Екатеринбург", "to":"Москва" },
        {id: 12, departureTime: "19: 00", realDepartureTime: "19: 00", arriveTime: "23: 00", realArriveTime: "23: 10", flight: "453", company:["S6"], status: "Приземлился", delay: true, "from": "Москва", "to":"Екатеринбург" },
        {id: 13, departureTime: "18: 00", realDepartureTime: "18: 10", arriveTime: "20: 00", realArriveTime: "20: 10", flight: "123", company:["S1"], status: "Приземлился", delay: true, "from": "Екатеринбург", "to":"Таганрог" },
        {id: 14, departureTime: "18: 10", realDepartureTime: "18: 10", arriveTime: "20: 30", realArriveTime: "20: 20", flight: "125", company:["S2"], status: "Приземлился", delay: false, "from": "Екатеринбург", "to":"Минск" },
        {id: 15, departureTime: "18: 20", realDepartureTime: "18: 20", arriveTime: "22: 00", realArriveTime: "22: 10", flight: "133", company:["S3"], status: "Приземлился", delay: true, "from": "Перьм", "to":"Екатеринбург" },
        {id: 16, departureTime: "18: 30", realDepartureTime: "18: 40", arriveTime: "20: 00", realArriveTime: "20: 00", flight: "523", company:["S4"], status: "Приземлился", delay: false, "from": "Владивосток", "to":"Екатеринбург" },
        {id: 17, departureTime: "18: 50", realDepartureTime: "20: 10", arriveTime: "23: 00", realArriveTime: "00: 10", flight: "323", company:["S5"], status: "В полете", delay: true, "from": "Екатеринбург", "to":"Москва" },
        {id: 18, departureTime: "19: 00", realDepartureTime: "19: 00", arriveTime: "23: 00", realArriveTime: "23: 10", flight: "453", company:["S6"], status: "Приземлился", delay: true, "from": "Москва", "to":"Екатеринбург" },
        {id: 19, departureTime: "18: 00", realDepartureTime: "18: 10", arriveTime: "20: 00", realArriveTime: "20: 10", flight: "123", company:["S1"], status: "Приземлился", delay: true, "from": "Екатеринбург", "to":"Таганрог" },
        {id: 20, departureTime: "18: 10", realDepartureTime: "18: 10", arriveTime: "20: 30", realArriveTime: "20: 20", flight: "125", company:["S2"], status: "Приземлился", delay: false, "from": "Екатеринбург", "to":"Минск" },
        {id: 21, departureTime: "18: 20", realDepartureTime: "18: 20", arriveTime: "22: 00", realArriveTime: "22: 10", flight: "133", company:["S3"], status: "Приземлился", delay: true, "from": "Перьм", "to":"Екатеринбург" },
        {id: 22, departureTime: "18: 30", realDepartureTime: "18: 40", arriveTime: "20: 00", realArriveTime: "20: 00", flight: "523", company:["S4"], status: "Приземлился", delay: false, "from": "Владивосток", "to":"Екатеринбург" },
        {id: 23, departureTime: "18: 50", realDepartureTime: "20: 10", arriveTime: "23: 00", realArriveTime: "00: 10", flight: "323", company:["S5"], status: "В полете", delay: true, "from": "Екатеринбург", "to":"Москва" },
        {id: 24, departureTime: "19: 00", realDepartureTime: "19: 00", arriveTime: "23: 00", realArriveTime: "23: 10", flight: "453", company:["S6"], status: "Приземлился", delay: true, "from": "Москва", "to":"Екатеринбург" },
        {id: 25, departureTime: "18: 00", realDepartureTime: "18: 10", arriveTime: "20: 00", realArriveTime: "20: 10", flight: "123", company:["S1"], status: "Приземлился", delay: true, "from": "Екатеринбург", "to":"Таганрог" },
        {id: 26, departureTime: "18: 10", realDepartureTime: "18: 10", arriveTime: "20: 30", realArriveTime: "20: 20", flight: "125", company:["S2"], status: "Приземлился", delay: false, "from": "Екатеринбург", "to":"Минск" },
        {id: 27, departureTime: "18: 20", realDepartureTime: "18: 20", arriveTime: "22: 00", realArriveTime: "22: 10", flight: "133", company:["S3"], status: "Приземлился", delay: true, "from": "Перьм", "to":"Екатеринбург" },
        {id: 28, departureTime: "18: 30", realDepartureTime: "18: 40", arriveTime: "20: 00", realArriveTime: "20: 00", flight: "523", company:["S4"], status: "Приземлился", delay: false, "from": "Владивосток", "to":"Екатеринбург" },
        {id: 29, departureTime: "18: 50", realDepartureTime: "20: 10", arriveTime: "23: 00", realArriveTime: "00: 10", flight: "323", company:["S5"], status: "В полете", delay: true, "from": "Екатеринбург", "to":"Москва" },
        {id: 30, departureTime: "19: 00", realDepartureTime: "19: 00", arriveTime: "23: 00", realArriveTime: "23: 10", flight: "453", company:["S6"], status: "Приземлился", delay: true, "from": "Москва", "to":"Екатеринбург" },
        {id: 31, departureTime: "18: 00", realDepartureTime: "18: 10", arriveTime: "20: 00", realArriveTime: "20: 10", flight: "123", company:["S1"], status: "Приземлился", delay: true, "from": "Екатеринбург", "to":"Таганрог" },
        {id: 32, departureTime: "18: 10", realDepartureTime: "18: 10", arriveTime: "20: 30", realArriveTime: "20: 20", flight: "125", company:["S2"], status: "Приземлился", delay: false, "from": "Екатеринбург", "to":"Минск" },
        {id: 33, departureTime: "18: 20", realDepartureTime: "18: 20", arriveTime: "22: 00", realArriveTime: "22: 10", flight: "133", company:["S3"], status: "Приземлился", delay: true, "from": "Перьм", "to":"Екатеринбург" },
        {id: 34, departureTime: "18: 30", realDepartureTime: "18: 40", arriveTime: "20: 00", realArriveTime: "20: 00", flight: "523", company:["S4"], status: "Приземлился", delay: false, "from": "Владивосток", "to":"Екатеринбург" },
        {id: 35, departureTime: "18: 50", realDepartureTime: "20: 10", arriveTime: "23: 00", realArriveTime: "00: 10", flight: "323", company:["S5"], status: "В полете", delay: true, "from": "Екатеринбург", "to":"Москва" },
        {id: 66, departureTime: "19: 00", realDepartureTime: "19: 00", arriveTime: "23: 00", realArriveTime: "23: 10", flight: "453", company:["S6"], status: "Приземлился", delay: true, "from": "Москва", "to":"Екатеринбург" },
    ]
};

const mutations = {};

const actions = {
    // запрос к API - отправка письма
    getFlightList({ commit }){
        return new Promise((resolve, reject) => {
            CommonService.request({ station: SVXcode, transport_types: "plane" })
                .then(data => {
                    console.log(data)
                    resolve()
                })
                .catch(err => {
                    console.log(err)
                    reject()
                });
        });
    }
};

const getters = {
    flightList: state => {
        return state.flightList;
    },
}

export default {
    state,
    mutations,
    actions,
    getters
};
