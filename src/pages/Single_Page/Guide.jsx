import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import guideImage from '~/assets/howtouse.json'
import ArrowDown from '~/components/Arrow/ArrowDown'
import ImagePart from '~/components/Part/ImagePart'
import Text from '~/components/Part/Text'
import '~/styles/style.scss'

const text = 'It works like a 20 minute timer on steroids! designed to study or work without procrastinating. Based on Pomodoro Technique, you can keep focused listening to soft music, checking your to do list, customizing the timer, and taking challenges to stay motivated, all with a clean and aesthetic design.'
function Guide() {
  return (
    <div id="guide">
      <Container >
        <Grid container spacing={5} sx={{ height: '103vh' }} >
          <Grid item xs={12} sm={12} md={6} lg={6} marginTop="20%">
            <div style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '20px' }}>How does it work?</div>
            <div style={{ lineHeight: '2', fontSize: '15px' }}>
              <Text text={text} delay={100} infinite />
            </div>
          </Grid>
          <ImagePart image={guideImage} />
          <ArrowDown id_page="achieve" />
        </Grid>
      </Container>
    </div>
  )
}
export default Guide