/*
  ::TODO:: Try rewriting component in hooks.
*/

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import api from './api'

class InputField extends React.Component {

  constructor (props) {
    super(props)
    this.state = {text: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    if (this.state.text === '')
      return
    this.props.onSubmit(this.state.text)
    this.setState({text: ''})
  }

  handleChange (event) {
    this.setState({text: event.target.value})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='What needs to be done?'
          autoFocus
          value={this.state.text}
          onChange={this.handleChange} />
        <button type='submit'>Add</button>
      </form>
    )
  }

}

InputField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit (text) {
    api(dispatch).todos.createTodo(text)
  },
})

export default connect(null, mapDispatchToProps)(InputField)
