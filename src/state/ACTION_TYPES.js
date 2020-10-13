const ACTION_TYPES = {

  /*
    workspace namespace
  */
  WORKSPACE__SET_ACTIVE_LIST: 'todo-2020/workspace/SET_ACTIVE_LIST',

  /*
    lists namespace
  */
  LISTS__CREATE:       'todo-2020/lists/CREATE',
  LISTS__APPEND_NOTE:  'todo-2020/lists/APPEND_NOTE',
  LISTS__INSERT_NOTE:  'todo-2020/lists/INSERT_NOTE',
  LISTS__DESTROY_NOTE: 'todo-2020/lists/DESTROY_NOTE',

  /*
    notes namespace
  */
  NOTES__CREATE: 'todo-2020/notes/CREATE',
  NOTES__UPDATE: 'todo-2020/notes/UPDATE',
  NOTES__TOGGLE: 'todo-2020/notes/TOGGLE',

}

export default ACTION_TYPES
