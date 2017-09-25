import {observable, action, computed, autorun} from 'mobx'
import ApiRequest from '../utils/ApiRequest'
import * as moment from 'moment'

class Program {

    @observable items;
    @observable programId;

    constructor(getStores) {
        this.items = [];
        this.programId = null;
        this.getStores = getStores;
    }

    @action setProgram = (id) => {
        this.programId = id;
    };

    @action clearProgram = () => {
        this.programId = null;
    };

    @action getProgramList = async(interfaceId) => {
        try {
            this.items = await new ApiRequest().getProgramList(interfaceId).then(
                ({data}) => {
                    return data.results.map(res => {
                        res.creation_time = moment(res.creation_time).format('DD.MM.YYYY HH:mm');
                        res.modification_time = moment(res.modification_time).format('DD.MM.YYYY HH:mm');

                        return res;
                    })
                }
            );

            return Promise.resolve();
        } catch (e) {
            console.error(e)
        }
    };
}

export default Program
