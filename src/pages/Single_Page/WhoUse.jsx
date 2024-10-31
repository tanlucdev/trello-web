import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import WhoUseImg from '~/assets/who-use.json'
import ArrowDown from '~/components/Arrow/ArrowDown'
import ArrowUp from '~/components/Arrow/ArrowUp'
import ImagePart from '~/components/Part/ImagePart'
import Text from '~/components/Part/Text'
import '~/styles/style.scss'

const title = 'Who uses the Pomodoro Technique?'
function WhoUse() {
  return (
    <div id="whouse" style={{ scrollSnapAlign: 'start' }}>
      <Container sx={{ minHeight: '100vh', scrollSnapAlign: 'start' }}>
        <Grid container spacing={5} sx={{ minHeight: '100vh' }} >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '2rem',
                marginTop: '30px',
                textAlign: 'center'
              }}
            >
              <Text text={title} delay={100} infinite fontSize="2rem" />
            </div>
          </Grid>
          <ImagePart image={WhoUseImg} />
          <Grid item xs={12} sm={12} md={6} lg={6} marginTop="10%">
            <div style={{ lineHeight: '2', fontSize: '20px' }}>
              <p>The Pomodoro Technique is very helpful for people who need to focus for studying or working to achieve certain goals.</p>
              <p >A lot of <span className="highlight">Youtubers</span>, <span className="highlight">influencers</span> and <span className="highlight">entrepreneurs</span> are likely to use this technique to be more productive.</p>
              <p>If you find yourself easily distracted and procrastinating, this may be your antidote.</p>
            </div>
          </Grid>
          <Grid container item spacing={5} >
            <ArrowDown id_page="faq" />
            <ArrowUp id_page="achieve" />
          </Grid>


        </Grid>
      </Container>
    </div>
  )
}
export default WhoUse