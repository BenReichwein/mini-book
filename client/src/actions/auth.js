import axios from 'axios';
import history from '../history'
import api from './api'
import {
    LOAD_PROFILE,
    GET_UID,
} from './types';
// making an account
export const register = (formValues) => () => {
  api.post('account/create', {
    email: formValues.email,
    password: formValues.password
  })
  .then(res => {
    if (res.status === 200) {
      alert(res.data)
      history.push('/login')
    }
  })
  .catch(err => {
    alert(err.response.data)
  })
};
// logging into existing account
export const login = (formValues) => () => {
  api.post('auth/login', {
    email: formValues.email,
    password: formValues.password
  })
  .then(res => {
    console.log(res)
    if (res.status === 200) {
      console.log(res.data)
      const token = res.data.access_token;
      axios.defaults.headers.common["Authorization"] = token;
      history.push('/profile')
    }
  })
  .catch(err => {
    console.log(err);
    alert('Error! No account with those credentials');
  })
};
// Logging out of account
export const logout = () => async () => {
  await api.get('auth/logout')
  .then(res => {
    if (res.status === 200) {
      alert('Logged out')
      history.push('/')
    }
  })
  .catch(err => {
    alert(err.response.data)
  })
};
// Loading profile information
export const loadProfile = () => async (dispatch) => {
  const response = await api.get('auth/profile')

  dispatch({ type: LOAD_PROFILE, payload: response.data});
};
// Update profile information
export const updateProfile = (formValues) => async () => {
  await api.patch('account/update', {
    email: formValues.email,
    password: formValues.password
  })
  .then(res => {
    alert(res.data)
  })
  .catch(err => {
    alert(err.response.data)
  })
};
// Get user id from authentication
export const getUid = () => async (dispatch) => {
  const response = await api.get(`auth/getUid`)

  dispatch({ type: GET_UID, payload: response.data});
}