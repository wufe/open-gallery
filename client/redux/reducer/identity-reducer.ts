import { IdentityState, getInitialIdentityState } from "../state/identity-state";
import { Action, AnyAction } from "redux";
import { SET_USERNAME_ACTION, SET_ISADMIN_ACTION } from "../action/identity-action";

export const identityReducer = (state: IdentityState = getInitialIdentityState(), action: AnyAction) => {
	switch (action.type) {
		case SET_USERNAME_ACTION:
			return {
				...state,
				name: action.payload
			} as IdentityState;
		case SET_ISADMIN_ACTION:
			return  {
				...state,
				isAdmin: action.payload,
			};
		default:
			return state;
	}
}