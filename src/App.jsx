import Board from '~/pages/Boards/_id'
import Guide from '~/pages/Single_Page/Guide'
import Infomation from '~/pages/Single_Page/Infomation'
import Appbar from '~/components/Appbar/AppBar'
import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        {window.location.pathname !== '/' ? <Appbar /> : null}
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/information" element={<Infomation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
