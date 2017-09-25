import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import { Segment } from 'semantic-ui-react'

import Programs from './Programs'
import ProgramInterface from './ProgramInterface'

@inject('router', 'programs', 'interfaces')
@observer
class VisualEditor extends Component {
    render() {
        return (
            <div>
                <Segment color="teal">
                    <ProgramInterface />
                </Segment>
                <Segment>
                    <Programs />
                </Segment>
                <Segment>

                </Segment>
            </div>
        );
    }
}

export default VisualEditor;