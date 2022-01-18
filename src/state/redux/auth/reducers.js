/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import types from '../../../consts/auth';

const initialState = {
	user: '',
	token: null,
	error: '',
	networks: [],
	registered: '',
	userlists: []
};

/* Reducers for Dashboard Charts */
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN:
		case types.ERROR:
		case types.NETWORK:
		case types.REGISTER: {
			return {
				...state,
				...action.payload
			};
		}
		case types.USERLIST: {
			return {
				...state,
				userlists: action.payload.users
			};
		}
		case types.UNREGISTER: {
			return {
				...state,
				unregistered: action.payload.users
			};
		}
		default: {
			return state;
		}
	}
};

export default authReducer;
