import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import ApiContext from './ApiContext'

const WithApi = (Child) => (props) => {
  const api = useContext(ApiContext)
  return <Child {...props} api={api} />
}

WithApi.propTypes = {
  Child: PropTypes.elementType.isRequired,
}

export default WithApi
