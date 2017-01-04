import actions from '../actions/index';
const {
	FOLLOWER_DETAIL_FETCH, FOLLOWER_DETAIL_ERROR, FOLLOWER_DETAIL_LOADED, 
	REPO_DETAIL_FETCH,
	USER_DETAIL_FETCH, USER_DETAIL_ERROR, USER_DETAIL_LOADED
	} = actions;

const defaultState = {
	loading: false	
}

function followers(state = defaultState, action){
	console.log(action.type);

	switch(action.type){
		case REPO_DETAIL_FETCH:
			return {...defaultState};
		case FOLLOWER_DETAIL_FETCH:
			return {...defaultState, loading: true}
		case FOLLOWER_DETAIL_ERROR:
			return {...defaultState, error: action.message }	
		case FOLLOWER_DETAIL_LOADED:
			return {...defaultState, users: action.users}
		case USER_DETAIL_FETCH:
			return Object.assign({}, state, {users: [...state.users.slice(0, action.index),Object.assign({}, state.users[0], {loading: true}),...state.users.slice(action.index+1)] })
		case USER_DETAIL_ERROR:
			return Object.assign({}, state, {users: [...state.users.slice(0, action.index),Object.assign({}, state.users[0], {loading: false, error: action.error}),...state.users.slice(action.index+1)] })
		case USER_DETAIL_LOADED:
			return Object.assign({}, state, {users: [...state.users.slice(0, action.index),Object.assign({}, state.users[0], {...action.detail}),...state.users.slice(action.index+1)] })
		default:
			return state;
	}  
}

export default followers;
