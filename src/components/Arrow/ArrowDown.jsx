
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import Grid from '@mui/material/Grid'
import '~/styles/style.scss'

export default function ArrowDown(props) {
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
        sx={{ cursor: 'pointer', textAlign: 'right' }}
        item xs={6} sm={6} md={6} lg={6}
      >
        <div
          className="arrow_wrap">
          <a onClick={(e) => {
            e.preventDefault()
            handleScrollNext()
          }}>
            <KeyboardDoubleArrowDownIcon sx={{ width: '30px', height: '30px' }} />
          </a>
        </div>
      </Grid>

    </>
  )
}