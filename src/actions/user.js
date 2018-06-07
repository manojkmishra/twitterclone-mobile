export function login() 
{ console.log('/src/actions/user.js-LOGIN')
  return { type: 'LOGIN' }
}

export function getUserInfo(info) 
{ console.log('/src/actions/user.js-GET_USER_INFO')
  return {   type: 'GET_USER_INFO',
             info 
         } //return user info here
}