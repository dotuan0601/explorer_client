import types from '../../../consts/account';

const initialState = {
	load: false,
	error: ''
};

const accountsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CREATE_ACCOUNT:
			return {
				...state,
				load: true
			};
	}
};
export default accountsReducer;
