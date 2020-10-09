import css from './index.css'
import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import Frame from '/components/Frame'
import InputField from '/components/InputField'
import TodoList from '/components/TodoList'

const AppComponent = ({store}) => (
  <div className={css.AppComponent}>
    <Provider store={store}>
      <Frame>
        <InputField />
        <TodoList />
      </Frame>
    </Provider>
  </div>
)

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
}

export default AppComponent
