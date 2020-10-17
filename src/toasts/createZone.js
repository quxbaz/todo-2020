import css from './style.css'

const createZone = (id) => {
  if (document.getElementById(id))
    return
  const div = document.createElement('div')
  div.id = id
  div.classList.add(css.ToastZone)
  document.body.prepend(div)
}

export default createZone
