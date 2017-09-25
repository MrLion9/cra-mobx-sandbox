import {RouterStore} from 'mobx-react-router'

import ProgramInterface from './ProgramInterface'
import Program from './Program'


class AppStore {

    constructor() {
        this.router = new RouterStore();
        this.interfaces = new ProgramInterface(this.getStores);
        this.programs = new Program(this.getStores);

        Promise.all([])
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
        interfaces: this.interfaces,
        programs: this.programs,
    })

}

const appStore = new AppStore();

export default appStore
