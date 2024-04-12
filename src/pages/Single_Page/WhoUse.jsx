import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Container from '@mui/material/Container'
import Text from '~/components/Part/Text'
import Lottie from 'lottie-react'
import WhoUseImg from '~/assets/who-use.json'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import ArrowDown from '~/components/ArrowDown/ArrowDown'
import ImagePart from '~/components/Part/ImagePart'
import ArrowUp from '~/components/ArrowDown/ArrowUp'

import '~/styles/style.scss'

const first_content = 'The Pomodoro Technique is very helpful for people who need to focus for studying or working to achieve certain goals.'
const second_content = 'A lot of <span class="highlight">Youtubers</span>, <span class="highlight">influencers</span> and <span class="highlight">entrepreneurs</span> are likely to use this technique to be more productive.'
const third_content = 'If you find yourself easily distracted and procrastinating, this may be your antidote.'
const title = 'Who uses the Pomodoro Technique?'
function WhoUse() {
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div id="whouse">
      <Container>

        <Grid container spacing={5} sx={{ height: '100vh' }} >
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
              <p >A lot of <span class="highlight">Youtubers</span>, <span class="highlight">influencers</span> and <span class="highlight">entrepreneurs</span> are likely to use this technique to be more productive.</p>
              <p>If you find yourself easily distracted and procrastinating, this may be your antidote.</p>
            </div>
          </Grid>
          <ArrowDown style={{ textAlign: 'right' }} id_page="achieve" />
        </Grid>
      </Container>
    </div>
  )
}
export default WhoUse