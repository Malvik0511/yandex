<template>
    <layout>
        <template slot="toolbar">
            <filters></filters>
        </template>
        <template slot="content">
            Контент
        </template>

    </layout>
</template>

<script>
    import Layout from "../components/layout/Layout";
    import Filters from "../components/filters/Filters";

    export default {

        name: "MainView",

        components:{
            Layout,
            Filters
        }
    }

</script>