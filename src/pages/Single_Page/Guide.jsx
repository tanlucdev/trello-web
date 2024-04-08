import React from 'react'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Container from '@mui/material/Container'
import guideImg from '../../../public/Questions.svg'
function Guide() {
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Container>

        <Grid container spacing={5} sx={{ height: '100vh' }} justifyContent="center" alignItems="center" >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div
              style={{
                fontSize: '40px',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '30px'

              }}
            >How does it work?</div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} >
            <div style={{ lineHeight: '2', fontSize: '25px' }}>
              It works like a 20 minute timer on steroids! designed to study or work without procrastinating. Based on Pomodoro Technique, you can keep focused listening to soft music, checking your to do list, customizing the timer, and taking challenges to stay motivated, all with a clean and aesthetic design.
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
              <img
                src={guideImg}
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </div>
          </Grid>

        </Grid>
      </Container>
    </>
  )
}
export default Guide