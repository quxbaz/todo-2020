import css from './style.css'

const dom = (text) => {
  const div = document.createElement('div')
  div.classList.add(css.Toast)
  div.innerText = text
  return div
}

const createToast = (id, props={}) => {

  props = {
    type: props.type || 'SUCCESS',
    text: props.text || '',
    duration: props.duration || 4000,
  }

  const toast = dom(props.text)
  const zone = document.getElementById(id)

  if (!zone)
    throw `Could not find an element on the page with id "${id}"`

  toast.style.transition = `all ${props.duration * 0.45}ms linear`
  zone.appendChild(toast)

  requestAnimationFrame(
    () => toast.classList.add(css.fadeIn)
  )

  setTimeout(
    () => toast.classList.add(css.fadeOut),
    props.duration / 2
  )

  setTimeout(
    () => toast.remove(),
    props.duration
  )

}

export default createToast
