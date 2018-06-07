export function login() 
{ console.log('/src/actions/user.js-type:LOGIN')
  return { type: 'LOGIN' }
}

export function getUserInfo(info) 
{ console.log('/src/actions/user.js-type:GET_USER_INFO')
  return {   type: 'GET_USER_INFO',
             info 
         } //return user info here
}

export function logout() 
{ console.log('/src/actions/user.js-type:LOGOUT')
  return { type: 'LOGOUT' }
}
