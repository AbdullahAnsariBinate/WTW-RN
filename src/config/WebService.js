import _ from 'lodash';
import ApiSauce from '../services/ApiSauce';
import store from '../redux';

// export const BASE_URL = 'https://server.appsstaging.com:3017/api/v1/';
export const BASE_URL = 'https://server.appsstaging.com:3060/api/';
export const ASSETS_URL = 'https://server.appsstaging.com:3060/';
export const WEB_SOCKET_URL = 'https://server.appsstaging.com:3060';
export const PRIVACY_POLICY_URL =
  'https://takechargemobile.app/privacy-policy/';
// export const BASE_URL = "http://10.0.4.71:3018/api/v1/"; //local
// export const ASSETS_URL = "http://10.0.4.71:3018/"; //local
export const API_TIMEOUT = 20000;
export const NEW_API_KEY = '1d399038bef14b0497d028fc27999696';
export const GEOCODE_API_KEY = 'AIzaSyBmaS0B0qwokES4a_CiFNVkVJGkimXkNsk';
const GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

export const API_LOG = true;

export const ERROR_SOMETHING_WENT_WRONG = {
  message: 'Something went wrong, Please try again later',
  error: 'Something went wrong, Please try again later',
};
export const ERROR_NETWORK_NOT_AVAILABLE = {
  message: 'Please connect to the working Internet',
  error: 'Please connect to the working Internet',
};
export const ERROR_TOKEN_EXPIRE = {
  message: 'Session Expired, Please login again!',
  error: 'Session Expired, Please login again!',
};
export const ERROR_CANCEL_ERROR = {
  message: 'Upload cancelled',
  error: 'Upload cancelled',
};

export const REQUEST_TYPE = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
};

// API USER ROUTES

export const LOGIN = {
  route: 'login',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const SIGNUP = {
  route: 'register',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const VERIFY_OTP = {
  route: 'verifyOtp',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const RESEND_PASSWORD = {
  route: 'resetPassword',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const RESEND_OTP = {
  route: 'resend-code',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const FORGOT_PASSWORD = {
  route: 'forgetpassword',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const SOCIAL_SIGIN = {
  route: 'socialLogin',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const LOGOUT = {
  route: 'logout',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const COMPLETE_PROFILE = {
  route: 'complete-profile',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const UPDATE_PROFILE = {
  route: 'update-profile',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const CHANGE_PASSWORD = {
  route: 'change-password',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const DELETE_USER = {
  route: 'delete-profile',
  access_token_required: true,
  type: REQUEST_TYPE.DELETE,
};
export const ADD_CARD = {
  route: 'add-card',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const GET_ALL_CARDS = {
  route: 'cards',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const GET_DEFAULT_CARD = {
  route: 'get-default-card',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const SET_DEFAULT_CARD = {
  route: 'default-card',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const DELETE_CARD = {
  route: 'deleteCard',
  access_token_required: true,
  type: REQUEST_TYPE.DELETE,
};
export const GET_ALL_LOCATION = {
  route: 'location-list',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const ADD_LOCATION = {
  route: 'add-location',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const ADD_VEHICLE = {
  route: 'add-vehicle',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const ADD_RATING = {
  route: 'addRating',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const PROCESS_TIRE_RETURN = {
  route: 'return-tire',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const GET_ALL_VEHICLE = {
  route: 'vehicle-list',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const DELETE_VEHICLE = {
  route: 'delete-vehicle',
  access_token_required: true,
  type: REQUEST_TYPE.DELETE,
};
export const GET_ALL_HISTORY = {
  route: 'past-history',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const DELETE_LOCATION = {
  route: 'delete-location',
  access_token_required: true,
  type: REQUEST_TYPE.DELETE,
};
export const GET_CONVERSATION_LIST = {
  route: 'chat-list',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const GET_NOTIFICATION = {
  route: 'app-notification',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const DEFAULT_VEHICLE = {
  route: 'default-vehicle',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const CHECKOUT_SOS_USER = {
  route: 'checkout',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const GET_SUBSCRIPTION = {
  route: 'subscription-packages',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const BUY_SUBSCRIPTION = {
  route: 'buy-subscription',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const PAY_DRIVER_TIP = {
  route: 'driver-tip',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const FETCH_ZIP_CODES = {
  route: 'zip-code-list',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const callRequest = function (
  url,
  data,
  parameter,
  urlParameter,
  header = {},
  // ApiSauce,
  baseUrl = BASE_URL,
) {
  // note, import of "ApiSause" has some errors, thats why I am passing it through parameters

  let _header = header;
  if (url.access_token_required) {
    const _access_token =
      store?.getState()?.authReducer?.user !== null
        ? store?.getState()?.authReducer?.user?.user_authentication
        : store?.getState()?.authReducer?.userToken !== null
        ? store?.getState()?.authReducer?.userToken
        : '';
    console.log('_access_token', _access_token);
    // const _access_token = '';
    if (_access_token) {
      _header = {
        ..._header,
        ...{
          Authorization: _access_token.includes('Bearer ')
            ? _access_token
            : 'Bearer ' + _access_token,
        },
      };
    }
  }

  const _url =
    parameter &&
    !_.isEmpty(parameter) &&
    urlParameter &&
    !_.isEmpty(urlParameter)
      ? `${url.route}/${urlParameter}?${parameter?.key}=${parameter?.value}`
      : parameter && !_.isEmpty(parameter)
      ? `${url.route}?${parameter?.key}=${parameter?.value}`
      : urlParameter && !_.isEmpty(urlParameter)
      ? `${url.route}/${urlParameter}`
      : url.route;
  console.log('_url', _url);
  if (url.type === REQUEST_TYPE.POST) {
    return ApiSauce.post(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.GET) {
    return ApiSauce.get(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.PUT) {
    return ApiSauce.put(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.DELETE) {
    return ApiSauce.delete(_url, data, _header, baseUrl);
  }
  // return ApiSauce.post(url.route, data, _header);
};

export default {
  // auth flow apis start
  SOCIAL_SIGIN,
  LOGIN,
  SIGNUP,
  RESEND_OTP,
  VERIFY_OTP,
  COMPLETE_PROFILE,
  UPDATE_PROFILE,
  LOGOUT,
  CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  // auth flow apis end

  // app usage apis start
  ADD_CARD,
  GET_ALL_CARDS,
  GET_DEFAULT_CARD,
  SET_DEFAULT_CARD,
  DELETE_CARD,
  GET_ALL_LOCATION,
  ADD_LOCATION,
  ADD_VEHICLE,
  DELETE_VEHICLE,
  GET_ALL_VEHICLE,
  GET_ALL_HISTORY,
  DELETE_LOCATION,
  GET_CONVERSATION_LIST,
  DEFAULT_VEHICLE,
  CHECKOUT_SOS_USER,
  ADD_RATING,
  PROCESS_TIRE_RETURN,
  // app usage apis end
};
