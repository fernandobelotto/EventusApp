const initialValue = {
  id: null,
  name: null,
  email: null,
  loginOption: null
}

function userReducer(state, action) {
  switch (action.type) {
    case 'add_id':
      return { id: action.payload.id }
    case 'add_name':
      return { name: action.payload.name, ...state }
    case 'add_email':
      return { email: action.payload.email, ...state }
    case 'add_loginOption':
      return { loginOption: action.payload.loginOption, ...state }
    case 'add_email_name_loginOption':
      return { email: action.payload.email, name: action.payload.name, loginOption: action.payload.loginOption, ...state }
    case 'add_id_name_code':
      return { id: action.payload.id, name: action.payload.name, code: action.payload.code }
    case 'clear':
      return { ...initialValue }
    default:
      throw new Error()
  }
}

export { userReducer, initialValue }