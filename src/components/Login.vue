<template>
    <Row>
        <Col>
            <Card style="width:420px;margin: 100px auto;">
                <div style="text-align:center">
                    <img src="data:image/jpeg;base64,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">
                    <h3>Dynamic Route Simulation</h3>
                    <form>
                        <label for="username"></label>
                        <Input placeholder="Please input your username" id="username"
                               style="margin: 18px 0;width: 200px; "
                               :icon="icon_username" v-model="UserInfo.username"/>
                        <label for="password"></label>
                        <Input placeholder="Please input your password" id="password"
                               style="width: 200px;"
                               :icon="icon_password" v-model="UserInfo.password"
                               type="password"/>
                        <br>
                        <Button type="success" style="margin: 18px 0;width: 200px; "
                         @click="Login">Log in</Button>

                    </form>
                </div>
            </Card>
        </Col>
    </Row>
</template>

<script>
    import {Filter} from '../utils/filterRouter'
    import {cacheSession} from "../utils/cacheData";
    import { mapActions}  from 'vuex'
    export default {
        name: 'Login',
        // props: {
        //     msg: String
        // }
        data() {
            return {
                icon_username: 'ios-alert-outline',
                icon_password: 'ios-alert-outline',
                UserInfo: {
                    username: '',
                    password: '',
                }
            }
        },
        methods:{
            Login(){
                this.$http.post('https://a23ebab4-08ae-4d14-a1be-8a5b3ec7aaa1.mock.pstmn.io/getRouters')
                    .then(data => {
                        cacheSession.cacheRouters(data.data.router);
                        const filter = new Filter(data.data.router);
                         console.log(filter.resolveRouters());
                        this.$router.addRoutes(filter.resolveRouters());
                        this.$router.push({name:'home'});

                        //this.navs = filter.filterTopBar();
                        console.log('topbar' + filter.filterTopBar())
                        this.renderTopBar(filter.filterTopBar());
                    })
                    .catch(err => err);
            },
            ...mapActions(['renderTopBar'])

        },
        watch: {
            'UserInfo.username': function (val) {
                //console.log(!!val)
                if (!!val) {
                    this.icon_username = 'ios-checkmark';
                } else {
                    this.icon_username = 'ios-alert-outline';
                }
            },
            'UserInfo.password': function (val) {
                // console.log(!!val)
                if (!!val) {
                    this.icon_password = 'ios-checkmark';
                } else {
                    this.icon_username = 'ios-alert-outline';
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
