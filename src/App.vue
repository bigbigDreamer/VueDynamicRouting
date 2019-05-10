<template>
    <div id="app">
<!--        <a @click="handleClick">路由守卫测试</a>-->
<!--        <ul>-->
<!--            <li v-for="(item,index) in navs" :keys="index"> {{item}}</li>-->
<!--        </ul>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import {Filter} from './utils/filterRouter'
    import {cacheSession} from "./utils/cacheData";

    export default {
        data() {
            return {
                //动态导航
                navs: [],
            }
        },
        methods: {
            handleClick() {
                this.$router.push({name: 'about'})
            }
        },
        mounted() {
            this.$router.push({name:'login'});
        }

    }
</script>

<style lang="less">

</style>
