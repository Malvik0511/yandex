<template>
    <layout>
        <template slot="toolbar">
            <filters></filters>
        </template>
        <template slot="content">
            <v-layout class="px-3">
                <flight-list></flight-list>
            </v-layout>
        </template>

    </layout>
</template>

<script>
    import Layout from "../components/layout/Layout";
    import Filters from "../components/filters/Filters";
    import FlightList from "../components/flight/FlightList"

    export default {

        name: "MainView",

        components:{
            Layout,
            Filters,
            FlightList
        },

    }

</script>