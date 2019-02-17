<template>
    <v-app id="app" class="layout">
        <v-toolbar :fixed="true"
                   :height="100"
                   class="layout__toolbar"
                   app flat>
                <v-layout>
                    <v-flex align-self-center xs4 sm2 md1>
                        <h2 @click="$router.push('/')"
                            class="pointer">Air SVX</h2>
                    </v-flex>
                    <v-flex>
                        <slot name="toolbar"></slot>
                    </v-flex>
                </v-layout>
        </v-toolbar>
        <!--Основной контент-->
        <v-content class="layout__content">
            <v-layout :fill-height="contentFillHeight" class="px-4 pb-4">
                <slot name="content"></slot>
                <v-layout class = "layout__block_fixed" column>
                    <updater class="order-xs1"></updater>
                    <navigation-scroll-top class="order-xs2"></navigation-scroll-top>
                </v-layout>
            </v-layout>
        </v-content>
        <!--всплывашка-->
        <pop-up></pop-up>
    </v-app>
</template>

<script>
    import "./layout.css";
    import NavigationScrollTop from "../navigation/navigationScrollTop/NavigationScrollTop";
    import PopUp from "../common/popUp/popUp";
    import Updater from "../common/updater/Updater";

    export default {
        name: "Layout",

        components:{
            NavigationScrollTop,
            PopUp,
            Updater
        },

        props: {
            // блок с основным контентом во всю высоту экрана
            contentFillHeight: {
                type: Boolean,
                default: true
            }
        },
    };
</script>
