import React from 'react'
import {PropTypes} from 'prop-types'

import {inject, observer} from 'mobx-react'
import ProgramInterfaceList from '../components/ProgramInterface'

const ProgramInterface = ({
                              interfaces: {items}
                          }) =>
    <ProgramInterfaceList
        items={items}
    />;


const mapStores = ({interfaces}) => ({interfaces});

export default inject(mapStores)(observer(ProgramInterface))
