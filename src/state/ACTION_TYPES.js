const ACTION_TYPES = {

  /*
    workspace namespace
  */
  WORKSPACE__SET_ACTIVE_LIST: 'todo-2020/workspace/SET_ACTIVE_LIST',

  /*
    lists namespace
  */
  LISTS__CREATE:       'todo-2020/lists/CREATE',
  LISTS__CREATE_NOTE:  'todo-2020/lists/CREATE_NOTE',
  LISTS__DESTROY_NOTE: 'todo-2020/lists/DESTROY_NOTE',

  /*
    notes namespace
  */
  NOTES__UPDATE: 'todo-2020/notes/UPDATE',
  NOTES__APPEND_TEXT: 'todo-2020/notes/APPEND_TEXT',

}

export default ACTION_TYPES
