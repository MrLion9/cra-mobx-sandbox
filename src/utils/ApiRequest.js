import axios from 'axios'

let instance;

class ApiRequest {
  constructor() {
    if (instance) {
      return instance;
    } else {
      return this.createInstance();
    }
  }

  createInstance = () => {
    this.axios = axios.create({
      baseURL: '/'

    });
    instance = this;
    return instance;
  };


  getProgramInterfaceList = () => this.axios.get('business-logic/rest/program-interface');

}

export default ApiRequest
