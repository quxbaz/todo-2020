const ACTION_TYPES = {

  /*
    workspace namespace
  */
  WORKSPACE__SET_ACTIVE_LIST: 'todo-2020/workspace/SET_ACTIVE_LIST',

  /*
    lists namespace
  */
  LISTS__CREATE:   'todo-2020/lists/CREATE',
  LISTS__ADD_TODO: 'todo-2020/lists/ADD_TODO',

  /*
    todos namespace
  */
  TODOS__CREATE: 'todo-2020/todos/CREATE',
  TODOS__REMOVE: 'todo-2020/todos/REMOVE',
  TODOS__UPDATE: 'todo-2020/todos/UPDATE',
  TODOS__TOGGLE: 'todo-2020/todos/TOGGLE',
  TODOS__MERGE:  'todo-2020/todos/MERGE',

}

export default ACTION_TYPES
