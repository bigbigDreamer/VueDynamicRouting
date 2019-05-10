//import router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Other from '../views/Other'
import {cacheSession} from "./cacheData";

export class Filter {
    constructor(routers) {
        //从浏览器内存中取出缓存
        this.routers = routers||cacheSession.getRouters();
    }

    resolveRouters() {
        this.routers.filter(route => {
            // console.log(new Object(item.component))
            switch (route.component) {
                case 'Home':
                    route.component = Home;
                    break;
                case 'About':
                    route.component = About;
                    break;
                default:
                    console.log('路由无匹配！！！');
            }
            //如果有children子路由那就继续进行component实际化
            if(route.children) {
                route.children.filter(child => {
                    if (child.component === 'Other') {
                        child.component = Other;
                    } else {
                        console.log('路由无匹配！！！');
                    }
                    return true;
                })
            }
            return true;
        });
        //console.log(this.routers);
        return this.routers;
    }

    filterTopBar() {
        //let newTopBar = [];
         return this.routers;

    }

}