import { useState, useEffect } from 'react'

const Text = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [opacity, setOpacity] = useState(0) // Thêm state để theo dõi opacity
  const [fontWeight, setFontWeight] = useState(400) // Thêm state để theo dõi fontWeight

  useEffect(() => {
    let timeout

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
        setOpacity(1) // Đặt opacity thành 1 khi thêm mỗi từ
        setFontWeight(900) // Đặt fontWeight thành 700 để làm chữ đậm hơn
      }, delay)

    } else if (infinite) {
      setCurrentIndex(0)
      setCurrentText('')
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, infinite, text])

  return (
    <span
      style={{
        fontSize: '1.5rem',
        lineHeight: '1.2',
        letterSpacing: '0.05em',
        transition: 'opacity 0.5s, font-weight 0.5s', // Thêm transition cho opacity và fontWeight
        opacity: opacity, // Đặt opacity dựa vào giá trị state
        fontWeight: fontWeight // Đặt fontWeight dựa vào giá trị state
      }}
    >
      {currentText}
    </span>
  )
}

export default Text
