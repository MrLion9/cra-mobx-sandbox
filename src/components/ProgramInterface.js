import React, {Component} from 'react'
import { PropTypes} from 'prop-types'
import {inject, observer} from 'mobx-react'

import { List } from 'semantic-ui-react'


const {string, date, number} = PropTypes;

@observer
class ProgramInterfaceListItem extends Component {

    static propTypes = {
        id: number,
        title: string,
        creation_time: date,
        modification_time: date,
    };

    render() {
        const {id, title, creation_time, modification_time} = this.props;
        return (

            <List.Item>
                <List.Icon name='folder open' verticalAlign='middle' />
                <List.Content>
                    <List.Header>{title}</List.Header>
                    <List.Description as='a'>{creation_time} - {modification_time}</List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

@observer
class ProgramInterfaceList extends Component {

    static propTypes = {
        items: PropTypes.object,
    };

    render() {
        return (
            <List divided relaxed>
                {this.props.items && this.props.items.data && this.props.items.data.results ? this.props.items.data.results.map(({id, title, creation_time, modification_time}) =>
                    <ProgramInterfaceListItem
                        {...{id, title, creation_time, modification_time}}
                    />
                ) : null}
            </List>
        );
    }
}

export default ProgramInterfaceList;