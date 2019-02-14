<template>
    <layout>
        <template slot="toolbar">
            Шапка
        </template>
        <template slot="content">
            Контент
        </template>

    </layout>
</template>

<script>
    import Layout from "../components/layout/Layout"

    export default {

        name: "MainView",

        components:{
            Layout
        }
    }

</script>