/**
 * Методы получения данных с backend
 */
import axios from "axios";
import { url, key } from "./constant"

let CommonService = {};

/**
 * запрос к апи
 * @param params
 * @returns {Promise<any>}
 */
CommonService.request = params => {
    return new Promise((resolve, reject) => {
        axios({
            url,
            withCredentials: true,
            method: "GET",
            data: params.data,
            params: params.data,
            headers: {
                Authorization: key,
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => resolve(response.data))
            .catch(error => reject(error.response))
    });
};

export default CommonService;