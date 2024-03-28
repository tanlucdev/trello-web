import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspace from './Menu/Workspace'
import Recent from './Menu/Recent'
import Started from './Menu/Started'
import Template from './Menu/Template'
import Profile from './Menu/Profile'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

function AppBar() {
  return (
    <div>
      <Box px={2} sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: "flex", alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component={TrelloIcon} inheritViewBox />
            <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
              Trello
            </Typography>
            <Workspace />
            <Recent />
            <Started />
            <Template />
            <Button variant="outlined">Create</Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>
          <TextField id="outlined-search" label="Search..." type="search" size="small" />
          <ModeSelect />
          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Help " sx={{ cursor: 'pointer' }}>
            <HelpOutlineIcon />
          </Tooltip>
          <Profile />
        </Box>

      </Box>
    </div>
  )
}

export default AppBar
