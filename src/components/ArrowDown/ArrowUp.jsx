
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Grid from '@mui/material/Grid'
import '~/styles/style.scss'

export default function ArrowUp(props) {
  const id_page = props.id_page
  const handleScrollNext = () => {

    const section = document.querySelector(`#${id_page}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <>
      <Grid
        sx={{ cursor: 'pointer', textAlign: 'left' }}
        item xs={6} sm={6} md={6} lg={6}
      >
        <div
          className="arrow_wrap">
          <a onClick={(e) => {
            e.preventDefault()
            handleScrollNext()
          }}>
            <KeyboardDoubleArrowUpIcon sx={{ width: '30px', height: '30px' }} />
          </a>
        </div>
      </Grid>

    </>
  )
}