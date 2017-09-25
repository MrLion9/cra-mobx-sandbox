import React, {Component} from 'react'
import { PropTypes} from 'prop-types'

import { List } from 'semantic-ui-react'

const {string, date, number} = PropTypes;

class ListItem extends Component {

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
                    <List.Description as='a'>
                        Created {creation_time}  Modified {modification_time}
                    </List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

class EmptyItem extends Component {
    render () {
        return (
            <List.Item>
                <List.Icon verticalAlign='middle' />
                <List.Content>
                    <List.Header>
                        Empty list
                    </List.Header>
                    <List.Description as='a'>

                    </List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

class VeList extends Component {

    static propTypes = {
        items: PropTypes.object
    };

    render() {
        const {items, onItemClick} = this.props;

        if (!items.length) {
            return (
                    <List divided relaxed>
                        <EmptyItem />
                    </List>
                );
        }

        return (
            <List divided relaxed>
                {items ? items.map(({id, title, creation_time, modification_time}, key) =>
                    <ListItem
                      key={key}
                      onItemClick={onItemClick.bind(null, id)}
                      {...{id, title, creation_time, modification_time}} />
                ) : null}
            </List>
        );
    }
}

export default VeList;