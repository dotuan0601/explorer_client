import types from '../consts/account';

const createAccount = account => ({
	type: types.CREATE_ACCOUNT,
	payload: account
});

export default {
	createAccount
};
