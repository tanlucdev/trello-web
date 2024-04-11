import Board from '~/pages/Boards/_id'
import Guide from '~/pages/Single_Page/Guide'
import WhoUse from '~/pages/Single_Page/WhoUse'
import Achieve from '~/pages/Single_Page/Achieve'

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
          <Route path="/whouse" element={<WhoUse />} />
          <Route path="/achieve" element={<Achieve />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
