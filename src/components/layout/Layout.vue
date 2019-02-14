<template>
    <v-app id="app">
        <v-toolbar :absolute="true"
                   :height="100"
                   class="layout__toolbar"
                   app flat>
                <v-layout>
                    <v-flex>
                        <h2>Air SVX</h2>
                    </v-flex>
                    <v-flex>
                        <slot name="toolbar"></slot>
                    </v-flex>
                </v-layout>
        </v-toolbar>

        <!--Основной контент-->
        <v-content class="layout__content">
            <v-layout :fill-height="contentFillHeight">
                <slot name="content"></slot>
                <!--navigation-scroll-top v-if="!panelRightActive"></navigation-scroll-top-->
            </v-layout>
        </v-content>
        <!--всплывашка с сообщениями при изменении данных-->
        <!--v-snackbar v-model="popupInfoActive"
                    :timeout="$store.getters.popupInfoTimeout"
                    :color="$store.getters.popupInfoColor"
                    top
                    right
        >
            <v-layout align-center pr-4>
                <v-flex class="mr-3"><img src="/icons/info.svg"></v-flex>
                <v-flex class="font-weight-medium">{{ $store.getters.popupInfoText }}</v-flex>
            </v-layout>

            <v-btn
                    @click="popupInfoActive = false"
                    icon absolute right
            ><i class="cctv-icon cctv-icon-close"></i></v-btn>
        </v-snackbar-->
    </v-app>
</template>

<script>

    export default {
        name: "Layout",

        props: {
            // блок с основным контентом во всю высоту экрана
            contentFillHeight: {
                type: Boolean,
                default: true
            }
        },

        data: () => ({ }),

        computed: {
            // состояние всплывашки с сообщениями
            /* popupInfoActive: {
                 get: function() {
                     return this.$store.getters.popupInfoActive;
                 },
                 set: function() {
                     this.$store.commit("CLEAR_POPUP_INFO");
                 }
             },*/

        }
    };
</script>
