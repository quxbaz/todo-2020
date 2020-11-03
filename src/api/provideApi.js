import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import ApiContext from './ApiContext'

/*
  Takes the 'api' value from context and passes it off as a prop to
  the child component.
*/
const provideApi = (Child) => (props) => {
  const api = useContext(ApiContext)
  return <Child {...props} api={api} />
}

provideApi.propTypes = {
  Child: PropTypes.elementType.isRequired,
}

export default provideApi
