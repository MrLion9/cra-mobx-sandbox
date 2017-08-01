import React from 'react'
import {PropTypes} from 'prop-types'

import {inject, observer} from 'mobx-react'
import ProgramInterfaceList from '../components/ProgramInterface'

const {shape, object} = PropTypes;

const ProgramInterface = ({
                              interfaces: {items}
                          }) =>
    <ProgramInterfaceList
        items={items}
    />;

ProgramInterface.propTypes = {
    interfaces: shape({items: object}),
};

const mapStores = ({interfaces}) => ({interfaces});

export default inject(mapStores)(observer(ProgramInterface))
