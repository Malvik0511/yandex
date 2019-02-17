<template>
    <layout>
        <template slot="content">
            <v-layout>
                <flight-item :id="id"></flight-item>
            </v-layout>
        </template>
    </layout>
</template>

<script>
    import Layout from "../components/layout/Layout";
    import FlightItem from "../components/flight/FlightItem";

    export default {

        name: "MainView",

        components:{
            Layout,
            FlightItem
        },

        computed: {
            //id рейса
            id() {
                return this.$route.params.id;
            },
        }
    }

</script>