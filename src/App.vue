<template>
    <div id="app">
        <loading v-show="loading"></loading>
        <NavHeader v-show="headerShow"></NavHeader>
        <!-- <HomeView></HomeView> -->
        <transition name="slide-left">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>

        <FooterView v-show='footerShow'></FooterView>
    </div>
</template>  

<script>
import NavHeader from "./components/Nav";
import FooterView from "./components/Footer";
import HomeView from "./components/Home";
import UserInfo from "./components/UserInfo";

import { mapActions, mapGetters } from "vuex";

export default {
    computed: mapGetters(["headerShow", "loading", "footerShow"]),
    watch: {
        $route(to) {
            /* if(to.path == '/user-info' || this.$route.path.indexOf('article')>0){
          //console.log(this.$route);
          this.$store.dispatch('headerHide')
        }else{
          this.$store.dispatch('headerShow')
        } */

            var path = to.path.substring(1);
            this.headerChange(path);
            this.footerChange(path);
        }
    },
    methods: {
        headerChange(path) {
            if (path == "user-info" || path.indexOf("article") !== -1) {
                this.$store.dispatch("headerHide");
            } else {
                this.$store.dispatch("headerShow");
            }
        },
        footerChange(path) {
            if (path.indexOf("article") == -1) {
                this.$store.dispatch("showFooter");
            } else {
                this.$store.dispatch("hideFooter");
            }
        }
    },
    mounted() {
        var path = this.$route.path.substring(1);
        this.headerChange(path);
        this.footerChange(path);
    },
    components: {
        NavHeader,
        FooterView,
        HomeView,
        UserInfo
    }
};
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: 0.7;
    transform: translate3d(0, 4em, 0);
}
.slide-up-enter,
.slide-up-leave-active {
    opacity: 0.3;
    transform: translate3d(0, 4em, 0);
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: 0.7;
    transform: translate3d(0, 6em, 0);
}
.slide-down-enter,
.slide-down-leave-active {
    opacity: 0.1;
    transform: translate3d(0, 6em, 0);
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 0.2s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: 0.5;
    transform: translate3d(2em, 0, 0);
}

.slide-left-enter,
.slide-left-leave-active {
    opacity: 0.3;
    transform: translate3d(2em, 0, 0);
}

.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: 0.5;
    transform: translate3d(5em, 0, 0);
}
.slide-right-enter,
.slide-right-leave-active {
    opacity: 0.3;
    transform: translate3d(5em, 0, 0);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
