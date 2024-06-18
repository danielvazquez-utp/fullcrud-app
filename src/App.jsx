import React from 'react'
import ContextProvider from './components/ContextProvider'
import MyRoutes from './components/MyRoutes'

const App = () => {
  return (
    <ContextProvider>
      <MyRoutes />
    </ContextProvider>
  )
}

export default App