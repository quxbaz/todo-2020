import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {values, sortBy} from '/util'
// import {createApi} from '/api'

const Sidebar = ({lists}) => {

  return (
    <div>
      {lists.map((list) => (
        <div key={list.id}>{list.title}</div>
      ))}
    </div>
  )

}

Sidebar.propTypes = {
  lists: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  lists: sortBy(values(state.lists), 'title'),
})

export default connect(mapStateToProps, null)(Sidebar)
