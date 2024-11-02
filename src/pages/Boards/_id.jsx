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
    const boardId = '67235336ae540282728a0690'

    fetchBoardDetailsAPI(boardId).then((boardresult) => {
      console.log("--- Board: ", boardresult)
      setBoard(boardresult)
    })
  }, [])

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      {console.log("Board: ", board)}
      <Appbar />
      <BoardBar board={mockData.board} />
      <BoardContent board={mockData.board} />
    </Container>
  )
}

export default Board
