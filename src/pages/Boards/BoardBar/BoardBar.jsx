import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatter'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgColor: 'primary.50'
  }
}

function BoardBar({ board }) {

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      '&::-webkit-scrollbar-track': { m: 2 },
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
          onClick={{}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board.type)}
          clickable
          onClick={{}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
          onClick={{}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
          onClick={{}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          onClick={{}}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >Invite
        </Button>
        <AvatarGroup
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:fisrt-of-type': { bgcolor: '#a4b0be' }
            }
          }}
          max={7}
        >
          <Tooltip title="xinh đẹp 1">
            <Avatar
              alt="xinh đẹp 1"
              src="https://cdn.dribbble.com/userupload/7244058/file/original-5588afe33ec6fb39ccb9b30c51f56f93.jpg?resize=1200x900"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp 2">
            <Avatar
              alt="xinh đẹp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81xXHfXpKUAnJfkutG06s233wqP4W2cS9Qn5PIQ2znQ&s"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp 3">
            <Avatar
              alt="xinh đẹp"
              src="https://cartoonavatar.com/wp-content/uploads/2021/12/07-300x300.png"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp 4">
            <Avatar
              alt="xinh đẹp"
              src="https://cdn.dribbble.com/users/2009763/screenshots/3982411/media/131e9f139d09646dd4a32b867a360868.gif"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp 5">
            <Avatar
              alt="xinh đẹp"
              src="https://cdn.dribbble.com/users/299102/screenshots/15616256/media/f005f53af23ebc05c03ea1ffbcf7646d.png?resize=1000x750&vertical=center"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp 6">
            <Avatar
              alt="xinh đẹp 1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iIZOg7zKJYu6pWwlDQIzS2oYF4LG8nuJ8zxs-ZdcD50_xXhqjiAOxByNED8q7iOBMhU&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp 7">
            <Avatar
              alt="xinh đẹp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iIZOg7zKJYu6pWwlDQIzS2oYF4LG8nuJ8zxs-ZdcD50_xXhqjiAOxByNED8q7iOBMhU&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp 8">
            <Avatar
              alt="xinh đẹp"
              src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/290241898_1470082196778960_7529435104516641771_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEg6VWFsfoIK7yc_eg-VEaL8PFcWl0SIELw8VxaXRIgQkbHobD9nHmngsMAtLEp7KJi_Wn7uHFJq9CZktZAdYMG&_nc_ohc=lKd2eNAXNfUAX9dKRKq&_nc_ht=scontent-hkg4-1.xx&oh=00_AfCv1n9Qvs_ET0WrQeKNl71oqORxWs9qDMfK47GsbUFTnA&oe=660B658D"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp">
            <Avatar
              alt="xinh đẹp"
              src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/417509120_1850424112078098_4303424367281169229_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEsnjstJn-6u78C3HWZnrqknTkrjeipCyidOSuN6KkLKLeaW30j6tBDRfofhckOIDAboffPw0zD4U35NzmzuxUd&_nc_ohc=aWDLt7DoVHQAX9BkgwQ&_nc_oc=AdgnN4EKf5kDXYw-0Lxv3iAoE4IfsX9iizanCekzxlTQ0uEi_XGbknZK3VUH7ZQByS0&_nc_ht=scontent-hkg1-2.xx&oh=00_AfAC2Pikrw-rSls9OTQkQ-o0eOoSNNuwZ5Iu9heziKmc6g&oe=660B28F6"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp">
            <Avatar
              alt="xinh đẹp"
              src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/398331081_1796042067516303_8445232899817694130_n.jpg?stp=cp6_dst-jpg_p640x640&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEl_QVju7wh7f2wLb7zrHDKywk3YvFWGIHLCTdi8VYYgbDL1aPw4kBCKmfA3oyihpgALI59C-6AxSVqR5xVpXV8&_nc_ohc=FEzXFtYLaiEAX9P_fJY&_nc_ht=scontent-hkg4-2.xx&oh=00_AfCoFD3qOBMlWsmqFNb1vu1He4_Yl4oMq2S7CA4I4Bm__g&oe=660C5C94"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp">
            <Avatar
              alt="xinh đẹp"
              src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/355130856_1717456155374895_8927372057955682879_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUnKEqO6OzOfAOng28eMqVp1OjbEStSJOnU6NsRK1Ik9Ys_40eEe1wTYl04bAj_1PRy9zp9C6SMejFRRntLOIa&_nc_ohc=Q9LlpiPCTfAAX9egdIz&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDb3RkurZgRDGy9QmccEpbYevG3Mz1pltIt9ExRobYtQw&oe=660B8843"
            />
          </Tooltip>
          <Tooltip title="xinh đẹp">
            <Avatar
              alt="xinh đẹp"
              src="https://cdn.dribbble.com/userupload/7244058/file/original-5588afe33ec6fb39ccb9b30c51f56f93.jpg?resize=1200x900"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>

  )
}

export default BoardBar
