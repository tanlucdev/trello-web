import { useState, useEffect, useCallback } from 'react'
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop'

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else if (window.pageYOffset <= showBelow && show) {
      setShow(false)
    }
  }, [show, showBelow])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div>
      {show && (
        <VerticalAlignTopIcon
          onClick={handleClick}
          style={{
            position: 'fixed',
            bottom: '25px',
            right: '25px',
            backgroundColor: '#ccc',
            color: 'black',
            borderRadius: '50%',
            padding: '10px',
            fontSize: '40px',
            cursor: 'pointer',
            zIndex: '1000'
          }}
        />
      )}
    </div>
  )
}

export default ScrollToTop
