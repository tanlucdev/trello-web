import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
function AppBar() {
  return (
    <div>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
    </div>
  )
}

export default AppBar
