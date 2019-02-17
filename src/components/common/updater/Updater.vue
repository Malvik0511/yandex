<template>
    <v-btn  v-if = "shouldShow"
            class = "updater ma-0 pa-0"
            @click="update"
            :loading="loaded"
            color="#235087">
        <v-icon class="white--text">update</v-icon>
    </v-btn>
</template>

<script>

    export default {
        name: "Updater",

        data: () => ({
            shouldShow: false,
            checkInterval: null,
            checkIntervalTime: 1 * 60 * 1000,
            loaded: false
        }),

        watch:{
            filterDistId(){
                this.restartCheck();
            }
        },

        computed: {
            flightUpdateInterval(){
                return this.$store.getters.flightUpdateInterval;
            },

            filterDistId(){
                return this.$store.getters.filterDistId;
            },

            flightLastUpdate(){
                return this.$store.getters.flightLastUpdate(this.filterDistId);
            }
        },

        mounted(){
            this.startCheck();
        },

        beforeDestroy(){
            this.stopCheck();
        },

        methods: {
            update(){
                this.loaded = true;
                if (this.filterDistId === "departure"){
                    this.$store.dispatch("getDepartureList")
                        .then(this.restartCheck)
                        .finally(() => this.loaded = false);
                } else {
                    this.$store.dispatch("getArrivaleList")
                        .then(this.restartCheck)
                        .finally(() => this.loaded = false);
                }
            },

            startCheck(){
                this.tryToSetShow();
                this.checkInterval = setInterval(this.tryToSetShow, this.checkIntervalTime);
            },

            stopCheck(){
                clearInterval(this.checkInterval)
                this.checkInterval = null;
            },

            restartCheck(){
                this.stopCheck();
                this.startCheck();
            },

            tryToSetShow(){
                if(this.flightLastUpdate && new Date().getTime() - this.flightLastUpdate > this.flightUpdateInterval) {
                    console.log(2)
                    this.shouldShow = true;
                    this.stopCheck()
                } else {
                    this.shouldShow = false;
                }
            }
        }
    };

</script>