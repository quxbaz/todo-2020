import css from './style.css'
import React, {useState} from 'react'

const HeaderBar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={css.HeaderBar}>
      <div className={css.HeaderBarIcon}>🗇</div>
      <div className={css.HeaderBarMenu}>
        <div className={css.HeaderBarMenuIcon} title='Menu' onClick={toggle}>
          <div>&#9776;</div>
        </div>
        {isOpen && (
          <div className={css.HeaderBarMenuContent}>
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
