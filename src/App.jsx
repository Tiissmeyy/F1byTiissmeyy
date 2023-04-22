import { useState } from 'react'
import Header from './assets/components/generics/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/generics/Footer/Footer'
import Main from './assets/components/generics/Main/Main'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default App
