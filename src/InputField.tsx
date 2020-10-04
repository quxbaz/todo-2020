import React from 'react'
import {Dispatch} from 'redux'
import {connect} from 'react-redux'
// import api from './api'

interface Props {
  onSubmit: (text: string) => void
}

class InputField extends React.Component<Props> {

  constructor (props: Props) {
    super(props)
    // this.state = {text: ''}
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  // handleSubmit (event) {
  //   event.preventDefault()
  //   if (this.state.text === '')
  //     return
  //   this.props.onSubmit(this.state.text)
  //   this.setState({text: ''})
  // }

  // handleChange (event) {
  //   this.setState({text: event.target.value})
  // }

  // render () {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <input
  //         type='text'
  //         placeholder='What needs to be done?'
  //         autoFocus
  //         value={this.state.text}
  //         onChange={this.handleChange} />
  //       <button type='submit'>Add</button>
  //     </form>
  //   )
  // }

  render () {
    return <input type='text' />
  }

}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit (text) {
    // api(dispatch).todos.createTodo(text)
  },
})

export default connect(null, mapDispatchToProps)(InputField)
