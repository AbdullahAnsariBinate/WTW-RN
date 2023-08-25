import { USERLOGINDATA, USERLOGOUT, SET_USER_TYPE } from '../../constants';


export function loginUser(payload) {
  return {
    type: USERLOGINDATA,
    payload,
  };
}
export function logoutUser() {
  return {
    type: USERLOGOUT,
  };

}
export function setUserType(userType) {
  return {
    type: SET_USER_TYPE,
    payload: userType
  }
}
