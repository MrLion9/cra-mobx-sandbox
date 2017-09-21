import {observable, action, computed, autorun} from 'mobx'
import ApiRequest from '../utils/ApiRequest'
import * as moment from 'moment'

class ProgramInterface {

    @observable items;
    @observable programInterfaceId;

    constructor(getStores) {
        this.items = [];
        this.programInterfaceId = null;
        this.getStores = getStores;
    }

    @action setProgramInterface = (id) => {
        this.programInterfaceId = id;
    };

    @action clearProgramInterface = () => {
        this.programInterfaceId = null;
    };

    @action getProgramInterfaceList = async () => {
        try {
            this.items = await new ApiRequest().getProgramInterfaceList().then(
                ({ data }) => { return data.results.map(res => {
                    res.creation_time = moment(res.creation_time).format('DD.MM.YYYY HH:mm');
                    res.modification_time = moment(res.modification_time).format('DD.MM.YYYY HH:mm');

                    return res;
                }) }
            );
            return Promise.resolve();
        } catch (e) {
            console.error(e)
        }
    };
}

export default ProgramInterface
