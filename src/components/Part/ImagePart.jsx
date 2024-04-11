
import Grid from '@mui/material/Grid'
import Lottie from 'lottie-react'

const ImagePart = (props) => {
  const image = props.image
  return (
    <>
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
          <Lottie
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              backgroundImage: 'none'
            }}
            animationData={image}
          />
        </div>
      </Grid>
    </>
  )
}
export default ImagePart