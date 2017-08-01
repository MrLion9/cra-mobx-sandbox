import {observable, action} from 'mobx'
import ApiRequest from '../utils/ApiRequest'

class ProgramInterface {

    @observable items = {};

    constructor(getStores) {
        this.getStores = getStores;
    }

    @action getProgramInterfaceList = async () => {
        try {
            this.items = await new ApiRequest().getProgramInterfaceList();
            return Promise.resolve();
        } catch (e) {
            console.error(e)
        }
    }
}

export default ProgramInterface
