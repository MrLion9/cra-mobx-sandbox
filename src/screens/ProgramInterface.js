import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

import {inject, observer} from 'mobx-react'
import ProgramInterfaceList from '../components/VeList'

import * as actions from '../actions'

@inject('router', 'interfaces')
@observer
class ProgramInterface extends Component {
    onItemClick(interfaceId) {
        const {push} = this.props.router;

        actions.setProgramInterface(interfaceId);
        push(`/interface/${interfaceId}`);
    }

    render() {
        const {interfaces} = this.props;

        return (
            <ProgramInterfaceList onItemClick={this.onItemClick.bind(this)} {...interfaces}/>
        );
    }
}

export default ProgramInterface;
