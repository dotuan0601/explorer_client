import actions from '../../../actions/account';
import { get, post } from '../../../services/request';

const createAccount = account => dispatch =>
	post(`http:/localhost:8000/api/accounts`, { ...account })
		.then(resp => {
			if (resp.status === 500) {
				console.log('error: 500');
			} else if (resp.status === 400) {
				console.log('error: 400');
			} else {
				dispatch(actions.createAccount(resp));
			}
		})
		.catch(error => {
			console.error(error);
		});
export default {
	createAccount
};
