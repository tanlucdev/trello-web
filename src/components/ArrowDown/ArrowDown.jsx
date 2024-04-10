
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'

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
      <div className="arrow_wrap">
        <a onClick={(e) => {
          e.preventDefault()
          handleScrollNext()
        }}>
          <KeyboardDoubleArrowDownIcon />
        </a>
      </div>
    </>
  )
}