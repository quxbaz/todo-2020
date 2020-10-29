const ACTION_TYPES = {

  /*
    history namespace
  */
  HISTORY__SET_URL: 'history/SET_URL',

  /*
    workspace namespace
  */
  WORKSPACE__SET_ACTIVE_LIST: 'workspace/SET_ACTIVE_LIST',
  WORKSPACE__CYCLE_NEXT_LIST: 'workspace/CYCLE_NEXT_LIST',
  WORKSPACE__CYCLE_PREV_LIST: 'workspace/CYCLE_PREV_LIST',

  /*
    lists namespace
  */
  LISTS__CREATE:          'lists/CREATE',
  LISTS__UPDATE:          'lists/UPDATE',
  LISTS__DISCARD:         'lists/DISCARD',
  LISTS__DESTROY:         'lists/DESTROY',
  LISTS__CREATE_NOTE:     'lists/CREATE_NOTE',
  LISTS__DESTROY_NOTE:    'lists/DESTROY_NOTE',
  LISTS__MERGE_NOTES:     'lists/MERGE_NOTES',
  LISTS__CLEAR_NOTES:     'lists/CLEAR_NOTES',
  LISTS__ORDER_NOTE_UP:   'lists/ORDER_NOTE_UP',
  LISTS__ORDER_NOTE_DOWN: 'lists/ORDER_NOTE_DOWN',
  LISTS__EMPTY_TRASH:     'lists/EMPTY_TRASH',

  /*
    notes namespace
  */
  NOTES__UPDATE: 'notes/UPDATE',

}

export default ACTION_TYPES
