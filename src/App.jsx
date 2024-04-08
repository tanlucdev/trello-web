import Board from '~/pages/Boards/_id'
import Guide from '~/pages/Single_Page/Guide'
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
