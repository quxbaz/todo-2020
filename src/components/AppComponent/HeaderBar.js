import css from './style.css'
import React, {useState, useEffect} from 'react'
import Shortcuts from './Shortcuts'

const HeaderBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggle = () => setIsMenuOpen(!isMenuOpen)

  const [showShortcuts, setShowShortcuts] = useState(false)

  const handleKey = (event) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false)
      setShowShortcuts(false)
    } else if (event.ctrlKey && event.key === 'h') {
      event.preventDefault()
      setShowShortcuts(!showShortcuts)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [showShortcuts])

  return (
    <div className={css.HeaderBar}>
      <div className={css.HeaderBarIcon}>🗇</div>
      <div className={css.HeaderBarMenu} tabIndex={-1} onBlur={() => setIsMenuOpen(false)}>
        <div className={css.HeaderBarMenuIcon} title='Menu' onClick={toggle}>
          <div>&#9776;</div>
        </div>
        {isMenuOpen && (
          <div className={css.HeaderBarMenuContent}>
            <div
              className={css.MenuContentLine}
              onClick={() => {
                setIsMenuOpen(false)
                setShowShortcuts(true)
              }}>
              View shortcut keys
            </div>
          </div>
        )}
        {showShortcuts && <Shortcuts onClickOutside={() => setShowShortcuts(false)} />}
      </div>
    </div>
  )

}

export default HeaderBar
