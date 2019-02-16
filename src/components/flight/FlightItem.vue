<template>
    <v-layout wrap
              align-content-start>
        <v-flex xs12
                align-self-start>
            <h2>{{filterDistId ? flight.from : flight.to}}</h2>
        </v-flex>
        <v-layout align-self-start>
            <span class="px-2">{{filterDistId ?
                flight.departureTime: flight.arriveTime}}</span>
            <span class="px-2">{{flight.company.join(", ")}}</span>
            <span class="px-2">{{flight.flight}}</span>
            <span class="px-2">{{flight.status}}</span>
        </v-layout>
    </v-layout>
</template>

<script>

    export default {
        name: "FlightItem",

        data: () => ({
            //признак того что загрузка завершена
            loaded: true,
        }),

        computed:{
            /**
             * получаем конкретный рейс
             * @returns {*}
             */
            flight(){
                return this.$store.getters.flight(this.id);
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

    };
</script>
