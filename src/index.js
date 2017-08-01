import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {inject, observer, Provider} from 'mobx-react'
import {Route, Router} from 'react-router'
import {syncHistoryWithStore} from 'mobx-react-router';
import createHashHistory from 'history/createHashHistory';

import {NavLink} from 'react-router-dom';

import DevTools from 'mobx-react-devtools';
import * as SUI from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

import globalStore from './stores'

import './index.css';
import About from './screens/About';
import Home from './screens/Home';
import ProgramInterface from './screens/ProgramInterface';


@inject('store')
@observer
class App extends Component {
    render() {
        const {store} = this.props;

        let hashHistory, history, stores;
        stores = store.getStores();
        hashHistory = createHashHistory();
        history = syncHistoryWithStore(hashHistory, stores.router);

        return (
            <Router history={history}>
                <Provider {...stores}>

                    <SUI.Container>
                        <SUI.Menu>
                            <SUI.Menu.Item as={NavLink} to="/">
                                Home
                            </SUI.Menu.Item>
                            <SUI.Menu.Item as={NavLink} to="/interface">
                                Interfaces
                            </SUI.Menu.Item>
                            <SUI.Menu.Item as={NavLink} to="/about">
                                About
                            </SUI.Menu.Item>
                            {/*<SUI.Menu.Item as={NavLink} to="/editor" active={false}>*/}
                            {/*Editor*/}
                            {/*</SUI.Menu.Item>*/}
                        </SUI.Menu>

                        <Route path="/" exact component={Home}/>
                        <Route path="/interface" component={ProgramInterface}/>
                        <Route path="/about" component={About}/>
                        {/*<Route path="/editor" exact component={Editor} />*/}
                        <DevTools/>
                    </SUI.Container>
                </Provider>
            </Router>
        );
    }
}


ReactDOM.render(
    <Provider store={globalStore}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
