import actions from '../actions/index';
const {REPO_DETAIL_FETCH, REPO_DETAIL_ERROR, REPO_DETAIL_LOADED} = actions;

const defaultState = {
	loading: false
}

function repo(state = defaultState, action){
	switch(action.type){
		case REPO_DETAIL_FETCH:
			return {...defaultState, loading: true}
		case REPO_DETAIL_ERROR:
			return {...defaultState, error: action.message }	
		case REPO_DETAIL_LOADED:
			return {...defaultState, detail: action.detail}
		default:
			return state;
	}  
}

export default repo;
