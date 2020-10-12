import {noop} from '/util'

const getCaretPosition = (input) => input.selectionDirection === 'forward'
  ? input.selectionEnd
  : input.selectionStart

const withPrev = (noteDom, yes, no=noop) => {
  const prev = noteDom.previousSibling
  prev ? yes(prev) : no()
  if (prev) yes(prev)
  else no()
}

const withNext = (noteDom, yes, no=noop) => {
  const next = noteDom.nextSibling
  next ? yes(next) : no()
}

const execMoveCaret = (noteDom, pos) => {
  const input = noteDom.querySelector('input')
  requestAnimationFrame(() => {
    input.focus()
    input.setSelectionRange(pos, pos)
  })
}

const moveCaret = (noteDom, DIRECTION) => {

  const input = noteDom.querySelector('input')
  const currentPos = getCaretPosition(input)

  if (DIRECTION === 'UP')
    withPrev(noteDom, (prev) => execMoveCaret(prev, currentPos))
  else
    withNext(noteDom, (next) => execMoveCaret(next, currentPos))

}

export default moveCaret
