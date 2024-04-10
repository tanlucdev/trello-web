import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Container from '@mui/material/Container'
import Text from '~/components/Text/Text'
import Lottie from 'lottie-react'
import guideImage from '~/assets/howtouse.json'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import ArrowDown from '~/components/ArrowDown/ArrowDown'

const text = 'It works like a 20 minute timer on steroids! designed to study or work without procrastinating. Based on Pomodoro Technique, you can keep focused listening to soft music, checking your to do list, customizing the timer, and taking challenges to stay motivated, all with a clean and aesthetic design.'
function Guide() {
  console.log('ok')
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>

      <Container>
        <Grid container spacing={5} sx={{ height: '100vh' }} >
          <Grid item xs={12} sm={12} md={6} lg={6} marginTop="20%">
            <div style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '20px' }}>How does it work?</div>
            <div style={{ lineHeight: '2', fontSize: '15px' }}>
              <Text text={text} delay={100} infinite />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Lottie style={{ maxHeight: '100%', maxWidth: '100%', backgroundImage: 'none' }} animationData={guideImage} />
            </div>
          </Grid>
          <Grid sx={{ cursor: 'pointer', textAlign: 'center' }} item xs={12} sm={12} md={12} lg={12}><ArrowDown id_page="achieve" /></Grid>
        </Grid>


      </Container>
    </>
  )
}
export default Guide