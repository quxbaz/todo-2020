import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import Frame from './Frame'
import InputField from './InputField'
import TodoList from './TodoList'

const style = {
  width: '500px',
  margin: '0 auto',
  marginTop: '40px',
}

function AppComponent ({store}) {
  return (
    <div style={style}>
      <Provider store={store}>
        <Frame>
          <InputField />
          <TodoList />
        </Frame>
      </Provider>
    </div>
  )
}

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
}

export default AppComponent
