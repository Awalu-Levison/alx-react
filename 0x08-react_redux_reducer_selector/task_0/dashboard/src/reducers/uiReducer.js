/* eslint-disable no-unused-vars */
import {
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes'

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
};

export default function uiReducer(state = initialState, action = {}) {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER: {
            return { ...state, isNotificationDrawerVisible: true };
        }
        case HIDE_NOTIFICATION_DRAWER: {
            return { ...state, isNotificationDrawerVisible: false };
        }
        case LOGIN_SUCCESS: {
            return { ...state, isUserLoggedIn: true };
        }
        case LOGIN_FAILURE: {
            return { ...state, isUserLoggedIn: false };
        }
        case LOGOUT: {
            return { ...state, isUserLoggedIn: false };
        }
        default:
            return state;
    }
};