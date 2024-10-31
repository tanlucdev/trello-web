import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import ArrowUp from '~/components/Arrow/ArrowUp'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&::before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div id="faq" style={{ backgroundColor: '#388be9', minHeight: '100vh' }}>
      <Container>
        <div style={{}}>
          <h1 style={{ textAlign: 'center', fontSize: '3rem', marginTop: '20px' }}>Frequently asked questions</h1>
          <Accordion
            style={{
              marginTop: '50px',
              width: '70%',
              margin: '0 auto',
              borderColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : 'black')
            }}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography style={{ fontSize: '20px' }}>How to use the Pomodoro Technique?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>In essence these are the steps but consider that times can change and the app helps you in the adoption process. 😉</p>
                <ol>
                  <li>Make a to-do list and get a timer.</li>
                  <li>Set the timer for 20 or 25 minutes and focus on one task until the alarm goes off.</li>
                  <li>Upon completion of the session, check off a pomodoro and record what you completed.</li>
                  <li>Take a 5 minute break to refresh your concentration.</li>
                  <li>After 4 pomodoros, take a long 15-minute break.</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '70%', margin: ' 0 auto ' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography style={{ fontSize: '20px' }}>What to do during pomodoro breaks?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>Make sure they are activities that do not exhaust you mentally. Here are 7 ideas for your breaks:</p>
                <ol>
                  <li>Do a little stretching routine.</li>
                  <li>Get out and sunbathe.</li>
                  <li>Listen to one of your favorite songs.</li>
                  <li>Make yourself a drink.</li>
                  <li>Eat a fruit.</li>
                  <li>Do breathing exercises.</li>
                  <li>Organize your desk.</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '70%', margin: ' 0 auto ' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography style={{ fontSize: '20px' }}>Can I get more features?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>Yes! For the sake of simplicity, we have tried to keep the basics in addition to these cool features:</p>
                <ul>
                  <li>Background music with volume control.</li>
                  <li>Default and custom times.</li>
                  <li>Challenges and prizes.</li>
                  <li>Control of automatic starts.</li>
                </ul>
                <p>If you need more features such as control of tasks and their times, teams, projects, etc.</p>
                <p>We are glad to know that you are interested, we are preparing our full version so you can be productive like playing. Have a nice day! 👾</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30%' }} >
          <ArrowUp id_page="whouse" />

        </div>


      </Container>

    </div>
  )
}