<template>
    <v-flex v-if = "filtredFlightList.length || !loaded"
            xs12 >
        <v-data-table
                :headers="headers"
                :items="filtredFlightList"
                :loading = "!loaded"
                hide-actions
                must-sort
                no-data-text=""
        >
            <template slot="items"
                      slot-scope="props">
                <td class="">{{ props.item.departureTime }}
                    <span v-if="props.item.departureTime !== props.item.realDepartureTime">
                        ({{props.item.realDepartureTime}})</span>
                </td>
                <td class="">{{ filterDistId ? props.item.from : props.item.to }}</td>
                <td class="">{{ props.item.flight }}</td>
                <td class="">{{ props.item.company.join(", ") }}</td>
                <td class="">{{ props.item.status }}</td>
            </template>
        </v-data-table>
    </v-flex>
    <!--v-layout align-center justify-center fill-height v-else>
        <v-flex>
            <navigation-not-found :error="notFound.error" :advice = "notFound.advice"></navigation-not-found>
        </v-flex>
    </v-layout-->
</template>

<script>

    export default {
        name: "FlightList",

        data: () => ({
            //признак того что загрузка завершена
            loaded: true,
        }),

        computed: {
            /**
             * список рейсов
             * @returns {default.computed.flightList|(function())|getters.flightList|Array}
             */
            flightList(){
                return this.$store.getters.flightList || []
            },
            /**
             * список рейсов с учетом фильтров
             * @returns {*}
             */
            filtredFlightList(){
                return this.flightList
                    .filter(flight => !this.filterDelay || flight.delay === this.filterDelay)
                    .filter(flight => this.filterDistId == (flight.to === "Екатеринбург" ));
            },
            /**
             * Состояние фильтра задержанных рейсов
             * @returns {default.computed.filterDelay|(function())|getters.filterDelay}
             */
            filterDelay(){
                return this.$store.getters.filterDelay
            },
            /**
             * вылет прилет
             * @returns {default.computed.filterDistId|(function())|getters.filterDistId}
             */
            filterDistId(){
                return this.$store.getters.filterDistId
            },

            //конфигурация таблицы
            headers(){
                return(
                    [
                        { text: "Вылет", align: "left", value: "departureTime", sortable: true },
                        !this.filterDistId ?
                            { text: "В", align: "left", value: "to", sortable: true }:
                            { text: "Из", align: "left", value: "from", sortable: true },
                        { text: "Рейс", align: "left", value: "flight", sortable: false },
                        { text: "Авиакомпания", align: "left", value: "company", sortable: false },
                        { text: "Статус", value: "status", sortable: false }
                    ]
                )
            }
        },

    };
</script>
