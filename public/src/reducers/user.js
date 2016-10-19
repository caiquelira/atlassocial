import LoginAction from 'actions/user';

export default function user(state = {}, action) {
    switch (action.type) {
        case LoginAction.LOGIN:
            return {

            }
        case LoginAction.LOGOUT:
        default: 
    }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}
