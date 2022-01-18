const initialState = {
	view: 'dashboard'
};
const viewReducer = (state = { view: 'dashboard' }, action = {}) => {
	if (action.type === 'SET_VIEW') {
		console.log(action.payload);
		return {
			...state,
			view: action.payload
		};
	} else {
		return state;
	}
};

export default viewReducer;
