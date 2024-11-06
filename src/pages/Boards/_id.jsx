import Container from '@mui/material/Container'
import Appbar from '~/components/Appbar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/api/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/api'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '672b5a11665c9ff03e2576b3'

    fetchBoardDetailsAPI(boardId).then((boardresult) => {
      setBoard(boardresult)
    })
  }, [])

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      {console.log("Board: ", board)}
      <Appbar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container>
  )
}

export default Board
