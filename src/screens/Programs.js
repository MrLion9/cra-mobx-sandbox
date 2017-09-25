import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

import {inject, observer} from 'mobx-react'
import ProgramList from '../components/VeList'

import * as actions from '../actions'

@inject('router', 'programs')
@observer
class Programs extends Component {
    onItemClick(programId) {

    }

    render() {
        const {programs} = this.props;

        return (
            <ProgramList onItemClick={this.onItemClick.bind(this)} {...programs}/>
        );
    }
}

export default Programs;
