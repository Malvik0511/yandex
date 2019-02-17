const express = require("express");
const router = express.Router();
//параметры запроса
const params = "&system=iata&station=svx&transport_types=plane";
//сервис запросов к апи расписания
const ServiceApi = require("../api/ServiceApi")
//обработка роута
router.get("/flight", (req, res) => getFlight(res));
//методо запроса рейсов
getFlight = (res) =>
    new ServiceApi({ params }).request()
        .then(response => {
            return res.send(response);
        })
        .catch(err => {
            return res.status(err.status || 500).send({ err: err.statusText });
        });

module.exports = router;