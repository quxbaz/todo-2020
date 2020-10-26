import css from './style.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from 'api'
import {createToast} from 'toasts'
import {useEscapeKey} from 'hooks'
import Modal from 'components/Modal'

const EmptyButton = ({onEmptyTrash}) => {

  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)
  useEscapeKey(close)

  return (
    <div className={css.EmptyButton}>
      <a onClick={() => setIsOpen(true)}>
        Empty all trash
      </a>
      {isOpen && (
        <Modal className={css.Modal} onClose={close}>
          <div>Permanently delete all trash?</div>
          <div className={css.ModalOptions}>
            <button
              onClick={close}
              className={css.CloseButton}>Close</button>
            <button
              onClick={onEmptyTrash}
              className={css.DeleteButton}>Empty all trash</button>
          </div>
        </Modal>
      )}
    </div>
  )

}

EmptyButton.propTypes = {
  onEmptyTrash: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onEmptyTrash () {
      api.lists.emptyTrash()
      createToast('toast-zone', {
        text: 'Trashcan emptied.',
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(EmptyButton)
