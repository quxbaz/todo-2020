const ACTION_TYPES = {

  /*
    workspace namespace
  */
  WORKSPACE__SET_ACTIVE_LIST: 'todo-2020/workspace/SET_ACTIVE_LIST',
  WORKSPACE__CYCLE_NEXT_LIST: 'todo-2020/workspace/CYCLE_NEXT_LIST',
  WORKSPACE__CYCLE_PREV_LIST: 'todo-2020/workspace/CYCLE_PREV_LIST',

  /*
    lists namespace
  */
  LISTS__CREATE:          'todo-2020/lists/CREATE',
  LISTS__UPDATE:          'todo-2020/lists/UPDATE',
  LISTS__DISCARD:         'todo-2020/lists/DISCARD',
  LISTS__DESTROY:         'todo-2020/lists/DESTROY',
  LISTS__CREATE_NOTE:     'todo-2020/lists/CREATE_NOTE',
  LISTS__DESTROY_NOTE:    'todo-2020/lists/DESTROY_NOTE',
  LISTS__MERGE_NOTES:     'todo-2020/lists/MERGE_NOTES',
  LISTS__CLEAR_NOTES:     'todo-2020/lists/CLEAR_NOTES',
  LISTS__ORDER_NOTE_UP:   'todo-2020/lists/ORDER_NOTE_UP',
  LISTS__ORDER_NOTE_DOWN: 'todo-2020/lists/ORDER_NOTE_DOWN',
  LISTS__EMPTY_TRASH:     'todo-2020/lists/EMPTY_TRASH',

  /*
    notes namespace
  */
  NOTES__UPDATE: 'todo-2020/notes/UPDATE',

}

export default ACTION_TYPES
