import { useState, useEffect } from 'react'

const Text = (props) => {
  const { text, delay, infinite } = props
  const fontSize = props.fontSize || '1rem'
  const lineHeight = props.lineHeight || '1.2'

  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [opacity, setOpacity] = useState(0) // Thêm state để theo dõi opacity

  useEffect(() => {
    let timeout

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
        setOpacity(1) // Đặt opacity thành 1 khi thêm mỗi từ
      }, delay)

    } else if (infinite) {
      setCurrentIndex(text.length)
      setCurrentText(text)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, infinite, text])

  return (
    <span
      style={{
        fontSize: fontSize,
        lineHeight: lineHeight,
        letterSpacing: '0.05em',
        transition: 'opacity 0.5s', // Thêm transition cho opacity và fontWeight
        opacity: opacity // Đặt opacity dựa vào giá trị state
        // Đặt fontWeight dựa vào giá trị state
      }}
    >
      {currentText}
    </span>
  )
}

export default Text
