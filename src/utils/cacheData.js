export const cacheSession = {
    //存储路由表
    cacheRouters(routers) {
        return window.sessionStorage.setItem('routers', routers);
    },
    //取出路由表
    getRouters() {
        return window.sessionStorage.getItem('routers');
    }

};