import actions from '../actions/index';
const {FOLLOWER_DETAIL_FETCH, FOLLOWER_DETAIL_ERROR, FOLLOWER_DETAIL_LOADED, REPO_DETAIL_FETCH} = actions;

const defaultState = {
	loading: false	
}

function followers(state = defaultState, action){
	switch(action.type){
		case REPO_DETAIL_FETCH:
			return {...defaultState};
		case FOLLOWER_DETAIL_FETCH:
			return {...defaultState, loading: true}
		case FOLLOWER_DETAIL_ERROR:
			return {...defaultState, error: action.message }	
		case FOLLOWER_DETAIL_LOADED:
			return {...defaultState, users: action.users}
		default:
			return state;
	}  
}

export default followers;
