import {RouterStore} from 'mobx-react-router'

import ProgramInterface from './ProgramInterface'


class AppStore {

    constructor() {
        this.router = new RouterStore();
        this.interfaces = new ProgramInterface(this.getStores);
        Promise.all([]
        )
            .then(async () => {
                try {
                    await this.interfaces.getProgramInterfaceList()
                }
                catch (e) {
                    console.error(e)
                }
            })
    }

    getStores = () => ({
        router: this.router,
        interfaces: this.interfaces
    })

}

const appStore = new AppStore();

export default appStore
