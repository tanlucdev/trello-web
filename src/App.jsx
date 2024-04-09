import Board from '~/pages/Boards/_id'
import Guide from '~/pages/Single_Page/Guide'
import Gen from '~/pages/Single_Page/Gen'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/gen" element={<Gen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
