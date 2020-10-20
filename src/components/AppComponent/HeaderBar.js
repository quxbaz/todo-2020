import css from './style.css'
import React, {useState, useEffect} from 'react'
import Shortcuts from './Shortcuts'

const HeaderBar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const handleEscape = (event) => {
    if (event.key === 'Escape') setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className={css.HeaderBar}>
      <div className={css.HeaderBarIcon}>🗇</div>
      <div className={css.HeaderBarMenu} tabIndex={-1} onBlur={() => setIsOpen(false)}>
        <div className={css.HeaderBarMenuIcon} title='Menu' onClick={toggle}>
          <div>&#9776;</div>
        </div>
        {isOpen && (
          <div className={css.HeaderBarMenuContent}>
            <Shortcuts />
            <div className={css.MenuContentLine}>
              View shortcut keys
            </div>
            <div className={css.MenuContentLine}>
              Menu line 2
            </div>
            <div className={css.MenuContentLine}>
              Menu line 3
            </div>
          </div>
        )}
      </div>
    </div>
  )

}

export default HeaderBar
