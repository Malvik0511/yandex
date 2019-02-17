<template>
    <v-layout v-if="flight || !loaded"
               wrap
              align-content-start>
        <v-flex xs12
                align-self-start>
            <h2>{{flight.thread.short_title}}</h2>
        </v-flex>
        <v-layout align-self-start>
            <span class="px-2">{{direct === "arrival" ?
                flight.arrival :  flight.departure}}</span>
            <span class="px-2">{{flight.thread.carrier.title }}</span>
            <span class="px-2">{{flight.thread.number}}</span>
        </v-layout>
    </v-layout>
    <navigation-not-found v-else
                          :text="notFound.text"
                          :advice = "notFound.advice"></navigation-not-found>
</template>

<script>
    import NavigationNotFound from "../navigation/navigationNotFound/NavigationNotFound"

    export default {
        name: "FlightItem",

        components:{
            NavigationNotFound
        },

        data: () => ({
            //признак того что загрузка завершена
            loaded: true,
            notFound:{
                text: "Данный рейс не найден",
                advice: "Попробуйте найти другой рейс"
            }
        }),

        mounted(){
            this.getFlights()
        },

        computed:{
            /**
             * вылет или прилет
             */
            direct() {
                return this.$route.name;
            },
            /**
             * получаем конкретный рейс
             * @returns {*}
             */
            flight(){
                return this.$store.getters.flight({ id: this.id, direct: this.direct});
            },
            /**
             * список рейсов
             * @returns {default.computed.flightList|(function())|getters.flightList|Array}
             */
            flightList(){
                return this.$store.getters.flightList(this.direct);
            },
            /**
             * значение фильтранаправления
             * @returns {default.computed.filterDistId|(function())|getters.filterDistId}
             */
            filterDistId(){
                return this.$store.getters.filterDistId
            },
        },

        props:{
            //id рейса
            id:{
                required: true,
            }
        },

        methods:{
            /**
             * запрос рейсов
             */
            getFlights(){
                if (!this.flightList){
                    this.loaded = false;
                }
                if (this.filterDistId === "departure"){
                    this.$store.dispatch("getDepartureList")
                        .finally(() => this.loaded = true);
                } else {
                    this.$store.dispatch("getArrivaleList")
                        .finally(() => this.loaded = true);
                }
            },
        }

    };
</script>
