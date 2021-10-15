import api from './api';
import { WELCOME_MESSAGE } from './types';

// gets welcome message from api to check if api is running
export const welcomeMessage = () => async (dispatch) => {
    const response = await api.get('home')

    dispatch({ type: WELCOME_MESSAGE, payload: response.data});
};