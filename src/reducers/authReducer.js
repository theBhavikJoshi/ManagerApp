const INITIAL_STATE = { email: '' };
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

export default (state= INITIAL_STATE, action) {
	switch (action.type) {
		case EMAIL_CHANGED:
			return action.payload;
		default:
			return state;
	}
}