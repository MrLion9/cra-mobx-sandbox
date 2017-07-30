import { RouterStore } from 'mobx-react-router'



class AppStore {

    constructor() {
        this.router= new RouterStore();
    }

    getStores = () => ({
        router: this.router
    })

}

const appStore = new AppStore();

export default appStore
