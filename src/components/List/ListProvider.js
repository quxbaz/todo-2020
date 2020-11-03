/*
  Use this component as a first-level-descendent of <Route />. Returns
  a <List /> component that is always provided a 'list' prop.
*/

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import List from './List'

const ListProvider = (props) => <List {...props} />

ListProvider.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
}

const mapState = (state, {id}) => ({
  list: state.lists[id],
})

export default connect(mapState)(ListProvider)
