<template>
    <v-flex v-if = "paginationfiltredFlightList.length || !loaded"
            xs12 >
        <v-data-table
                dark
                :headers="headers"
                :items="paginationfiltredFlightList"
                :loading = "!loaded"
                hide-actions
                must-sort
                no-data-text=""
        >
            <template slot="items"
                      slot-scope="props">
                <tr @click="toFlight(props.item.id)"
                        class="pointer">
                    <td class="">{{ props.item.departureTime }}
                        <span v-if="props.item.departureTime !== props.item.realDepartureTime">
                            ({{props.item.realDepartureTime}})</span>
                    </td>
                    <td class="">{{ filterDistId ? props.item.from : props.item.to }}</td>
                    <td class="">{{ props.item.flight }}</td>
                    <td class="">{{ props.item.company.join(", ") }}</td>
                    <td class="">{{ props.item.status }}</td>
                </tr>
            </template>
        </v-data-table>
        <infinite-loading @infinite="infiniteHandler"
                          force-use-infinite-wrapper="body"
                          v-if = "paginationfiltredFlightList.length &&
                            paginationfiltredFlightList.length !== filtredFlightList.length">
            <div slot="spinner"><v-progress-circular indeterminate color="primary" :width="3"></v-progress-circular></div>
        </infinite-loading>
    </v-flex>
    <navigation-not-found v-else
                          :text="notFound.text"
                          :advice = "notFound.advice"
                          :back_page_btn="false"></navigation-not-found>
</template>

<script>
    import InfiniteLoading from "vue-infinite-loading";
    import NavigationNotFound from "../navigation/navigationNotFound/NavigationNotFound";

    export default {
        name: "FlightList",

        components:{
            InfiniteLoading,
            NavigationNotFound
        },

        mounted(){
            this.$store.dispatch("getFlightList");
        },

        data: () => ({
            //признак того что загрузка завершена
            loaded: true,
            pageLength: 25,
            notFound:{
                text: "Рейсов не найдено",
                advice: "Попробуйте поменять критерии поиска"
            }
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
                    .filter(flight => this.filterDistId == (flight.to === "Екатеринбург" ))
                    .filter(flight => flight.flight.indexOf(this.filterWord) !== -1);
            },
            paginationfiltredFlightList(){
                return this.filtredFlightList
                    .slice(0, this.pageLength * this.flightListPage < this.flightList.length ?
                        this.pageLength * this.flightListPage : this.flightList.length)
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
            filterWord(){
                return this.$store.getters.filterWord
            },
            flightListPage(){
                return this.$store.getters.flightListPage;
            },

            //конфигурация таблицы
            headers(){
                return(
                    [
                        { text: "Вылет", align: "left", value: "departureTime", sortable: true },
                        !this.filterDistId ?
                            { text: "В", align: "left", value: "to", sortable: false }:
                            { text: "Из", align: "left", value: "from", sortable: false },
                        { text: "Рейс", align: "left", value: "flight", sortable: false },
                        { text: "Авиакомпания", align: "left", value: "company", sortable: true },
                        { text: "Статус", value: "status", sortable: false }
                    ]
                )
            }
        },

        methods: {
            infiniteHandler(){
                if (this.paginationfiltredFlightList.length < this.filtredFlightList.length){
                    this.$store.commit("NEXT_FLIGHT_LIST_PAGE");
                }
            },

            toFlight(id){
                this.$router.push({name: 'flight', params: { id } });
            }
        }
    };
</script>
