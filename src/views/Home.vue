<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">Dynamic Routing</div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            在线培训
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            电话指导
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            人工服务
                        </MenuItem>

                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <!--                    <BreadcrumbItem>Home</BreadcrumbItem>-->
                    <!--                    <BreadcrumbItem>Components</BreadcrumbItem>-->
                    <!--                    <BreadcrumbItem>Layout</BreadcrumbItem>-->
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu theme="light" width="auto" @on-select="handleSelectMenu">
                                <Submenu :name="item.name" v-for="(item,index) in topBar" :key="index">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        {{item.title}}
                                    </template>
                                    <MenuItem :name="item.children[0].name||''" v-if="item.children&&item.children[0].title">
                                        {{item.children[0].title}}
                                    </MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            Content
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {mapState} from 'vuex'

    export default {
        name: 'home',
        methods:{
            handleSelectMenu(name){
                this.$router.push({name});
            }
        },
        components: {
            // HelloWorld
        },
        beforeRouteLeave(to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            console.log(to.name)
            next()
        },
        computed: {
            ...mapState(['topBar'])
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 200px;
        height: 30px;
        // background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 5px;
        left: 20px;
        color: white;
        font-family: "Tw Cen MT Condensed Extra Bold";
        font-style: italic;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-footer-center {
        text-align: center;
    }
</style>
