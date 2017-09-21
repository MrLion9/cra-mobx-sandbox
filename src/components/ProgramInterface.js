import React, {Component} from 'react'
import { PropTypes} from 'prop-types'
import { observer } from 'mobx-react'

import { List } from 'semantic-ui-react'

const {string, date, number} = PropTypes;

@observer
class ProgramInterfaceListItem extends Component {

    static propTypes = {
        id: number,
        title: string,
        creation_time: string,
        modification_time: string,
    };

    render() {
        const {id, title, creation_time, modification_time, onItemClick} = this.props;
        return (

            <List.Item>
                <List.Icon name='folder open' verticalAlign='middle' />
                <List.Content>
                    <List.Header
                      onClick={onItemClick}>
                      {title}
                    </List.Header>
                    <List.Description as='a'>Created {creation_time}  Modified {modification_time}</List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

@observer
class ProgramInterfaceList extends Component {

    static propTypes = {
        items: PropTypes.object
    };

    render() {
        const {items, onItemClick} = this.props;

        return (
            <List divided relaxed>
                {items ? items.map(({id, title, creation_time, modification_time}, key) =>
                    <ProgramInterfaceListItem
                      key={key}
                      onItemClick={onItemClick.bind(null, id)}
                      {...{id, title, creation_time, modification_time}} />
                ) : null}
            </List>
        );
    }
}

export default ProgramInterfaceList;