import React from 'react'
import styled from 'styled-components'

const StyledApp = styled.h1`
  color: red;
`

class App extends React.Component {

  render () {
    return (
      <StyledApp>Todo 2020</StyledApp>
    );
  }

}

export default App
