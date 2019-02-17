<template>
    <layout>
        <template slot="toolbar">
            <v-layout justify-content-space-between>
                <filter-btns></filter-btns>
                <filter-field @setFilterStr="setFilterStr"
                              :height="36"
                              class="align-self-center justify-end"
                              placeholder="Номер рейса"></filter-field>
            </v-layout>
        </template>
        <template slot="content">
            <v-layout>
                <flight-list></flight-list>
            </v-layout>
        </template>

    </layout>
</template>

<script>
    import Layout from "../components/layout/Layout";
    import FilterBtns from "../components/filter/FilterBtns";
    import FlightList from "../components/flight/FlightList";
    import FilterField from "../components/filter/filterField/FilterField";

    export default {

        name: "MainView",

        components:{
            Layout,
            FilterBtns,
            FlightList,
            FilterField
        },

        methods:{
            setFilterStr(val){
                this.$store.commit("SET_WORD_FILTER", val);
            }
        }

    }

</script>