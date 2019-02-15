<template>
    <v-layout justify-start>

            <tool-tip-btn v-for="btn in distbBtns"
                    @click = "setDistFilter(btn.id)"
                    :active_icon = "btn.icon"
                    :active_text = "btn.name"
                    :active = "btn.id === activeDistId"
                    class="ma-0 mr-1"></tool-tip-btn>
            <tool-tip-btn @click="setDelayFilter"
                    active_icon = "timer_off"
                    active_text = "Задержанные"
                    :active = "filterDelay"
                    class="ma-0 mr-1"></tool-tip-btn>
    </v-layout>
</template>

<script>
    import ToolTipBtn from "../common/ToolTipBtn";

    export default {
        name: "Fiters",

        components:{
            ToolTipBtn
        },

        computed: {
            xs() {
                return this.$vuetify.breakpoint.name === "xs";
            },

            lg(){
                return ["xl", "lg"].includes(this.$vuetify.breakpoint.name);
            },

            distbBtns(){
                return this.$store.getters.filterDistItems;
            },

            activeDistId(){
                return this.$store.getters.filterDistId;
            },

            filterDelay(){
                return this.$store.getters.filterDelay;
            }

        },

        methods: {
            setDistFilter(id){
                this.$store.commit("SET_DIST_FILTER", id);
            },

            setDelayFilter(){
                this.$store.commit("SET_DELAY_FILTER", !this.filterDelay);
            }
        }
    };
</script>
