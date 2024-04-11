
import Grid from '@mui/material/Grid'
import Lottie from 'lottie-react'

const TextPart = (props) => {
  const image = props.image
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} marginTop="20%">
        <div style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '20px' }}>How does it work?</div>
        <div style={{ lineHeight: '2', fontSize: '15px' }}>
          <Text text={text} delay={100} infinite />
        </div>
      </Grid>
    </>
  )
}
export default TextPart