import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
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
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 2,
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1565c0' : '#2c3e50'),
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'white' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{ color: 'white' }} />
            <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
              Trello
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Workspace />
              <Recent />
              <Started />
              <Template />
              <Button
                href='/guide'
                sx={{
                  color: 'white',
                  border: 'none',
                  '&:hover': {
                    border: 'none'
                  }
                }}
                variant="outlined"
                startIcon={<LibraryAddIcon />}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            id="outlined-search"
            label="Search..."
            type="text"
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  fontSize='small'
                  sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setSearchValue('')}
                />
              )
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '180px',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' }
              }

            }}
          />
          <ModeSelect />
          <Tooltip title="Notifications">
            <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help ">
            <HelpOutlineIcon sx={{ color: 'white', cursor: 'pointer' }} />
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </div>
  )
}

export default AppBar
