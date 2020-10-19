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
  if (pos === 'END')
    pos = noteDom.querySelector('input').value.length
  requestAnimationFrame(() => {
    input.focus()
    input.setSelectionRange(pos, pos)
  })
}

const moveCaret = (noteDom, DIRECTION) => {
  const input = noteDom.querySelector('input')
  const currentPos = getCaretPosition(input)
  switch (DIRECTION) {
    case 'UP'             : withPrev(noteDom, (prev) => execMoveCaret(prev, currentPos)); break
    case 'DOWN'           : withNext(noteDom, (next) => execMoveCaret(next, currentPos)); break
    case 'BACKWARD'       : withPrev(noteDom, (prev) => execMoveCaret(prev, 'END')); break
    case 'FORWARD'        : withNext(noteDom, (prev) => execMoveCaret(prev, 0)); break
    case 'START'          : execMoveCaret(noteDom, 0); break
    case 'END'            : execMoveCaret(noteDom, 'END'); break
    default               : throw 'DIRECTION is invalid.'
  }
}

export default moveCaret
