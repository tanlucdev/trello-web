import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Container from '@mui/material/Container'
import Text from '~/components/Part/Text'
import Lottie from 'lottie-react'
import guideImage from '~/assets/achieve.json'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import MessageIcon from '@mui/icons-material/Message'
import ArrowDown from '~/components/ArrowDown/ArrowDown'
import ArrowUp from '~/components/ArrowDown/ArrowUp'

import ImagePart from '~/components/Part/ImagePart'

const text = 'With Pomodoro Timer Online, you will achieve your goals by staying focused and painless in the process.'
const text2 = 'With Background Music,'
const text3 = 'Custom Timer,'
const text4 = 'To Do List,'
const text5 = 'and Desktop Notifications'


function Achieve() {
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div id="achieve" style={{ backgroundColor: "#teal" }}>
      <Container style={{ height: '100vh' }}>
        <Grid container spacing={5} sx={{ height: '90vh' }} >
          <Grid item xs={12} sm={12} md={6} lg={6} marginTop="20%">
            <div style={{ lineHeight: '2', fontSize: '1rem' }}>
              <Text text={text} delay={0} infinite fontSize="1.5rem" />
              <br />
              <br />
              <LibraryMusicIcon sx={{ marginRight: '10px', fontSize: '2rem', color: 'teal' }} />
              <Text text={text2} delay={100} infinite fontSize="1.5rem" lineHeight="2" />
              <br />
              <BrowseGalleryIcon sx={{ marginRight: '10px', fontSize: '2rem', color: '#fab1a0' }} />
              <Text text={text3} delay={100} infinite fontSize="1.5rem" lineHeight="1.5" />
              <br />
              <CheckBoxIcon sx={{ marginRight: '10px', fontSize: '2rem', color: '#fdcb6e' }} />
              <Text text={text4} delay={100} infinite fontSize="1.5rem" lineHeight="1.5" />
              <br />
              <MessageIcon sx={{ marginRight: '10px', fontSize: '2rem', color: '#636e72' }} />
              <Text text={text5} delay={100} infinite fontSize="1.5rem" lineHeight="1.5" />
            </div>
          </Grid>
          <ImagePart image={guideImage} />

        </Grid>
        <Grid container item spacing={5}>
          <ArrowDown id_page="whouse" />
          <ArrowUp id_page="guide" />
        </Grid>
      </Container>
    </div>
  )
}
export default Achieve