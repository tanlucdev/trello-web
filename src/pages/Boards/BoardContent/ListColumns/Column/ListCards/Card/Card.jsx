import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Card 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/417509120_1850424112078098_4303424367281169229_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEsnjstJn-6u78C3HWZnrqknTkrjeipCyidOSuN6KkLKLeaW30j6tBDRfofhckOIDAboffPw0zD4U35NzmzuxUd&_nc_ohc=aWDLt7DoVHQAX8MH3tD&_nc_oc=AdgylkliHQD8fAyMUy6giM7_g2EafPH7Dp6fMF3PZg6p9T-Hfn_d-DQJBEsMBSpSHeQHJtXvOhRrogTMfHDqai3m&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBQZySwZ7HzSKG-gxg0MfZZLsJIPMMsGAUol1Gq1c1xRw&oe=660DCBF6"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Mt xinh dep</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
