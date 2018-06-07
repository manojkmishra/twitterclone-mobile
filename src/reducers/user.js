const initialState = { isAuthenticated: false, info: null}

export default (state = initialState, action) => 
{
  console.log('/src/reducer/user.js-action', action)
  console.log('/src/reducer/user.js-action.type', action.type)
  console.log('/src/reducer/user.js-state...', ...state)
   switch (action.type) 
  { case 'LOGIN': return {  ...state, isAuthenticated: true  } 
   case 'GET_USER_INFO': return { ...state, info: action.info }
    default: return state;
  }
};
