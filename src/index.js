import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider, inject, observer } from 'mobx-react'

import DevTools from 'mobx-react-devtools';
import * as SUI from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import globalStore from './stores'

import './index.css';

import registerServiceWorker from './registerServiceWorker';


@inject('store')
@observer
class App extends Component {
    render() {
        const {store} = this.props;
        console.log(store);
        return (

              <SUI.Container>
                  <SUI.Button>dd</SUI.Button>
                <DevTools />
              </SUI.Container>
        );
    }
}

// const wrappedApp = () =>

// export default wrappedApp

ReactDOM.render(
    <Provider store={globalStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
