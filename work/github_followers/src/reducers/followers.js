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
			return {...state, users: undefined}
		case FOLLOWER_DETAIL_FETCH:
			return {...state, loading: true}			
		case FOLLOWER_DETAIL_ERROR:
			return {...state, error: action.message }	
		case FOLLOWER_DETAIL_LOADED:
			if(action.page == 1){
				return {...state, users: action.users, page: action.page, loading: false}
			}else{
				return {...state, users: [...state.users, ...action.users], page: action.page, loading: false}
			}
		case USER_DETAIL_FETCH:
			return {...state, users: [ 
				...state.users.slice(0, action.index),
				Object.assign({}, state.users[0], {loading: true}),
				...state.users.slice(action.index+1)] 
			}
		case USER_DETAIL_ERROR:
			return {...state, users: [...state.users.slice(0, action.index),Object.assign({}, state.users[0], {loading: false, error: action.error}),...state.users.slice(action.index+1)] }
		case USER_DETAIL_LOADED:
			return {...state, users: [
				...state.users.slice(0, action.index),
				Object.assign({}, state.users[0], {loading: false, ...action.detail, hasEmail: !!action.detail.email })
				,...state.users.slice(action.index+1)
				] 
			}
		default:
			return state;
	}  
}

export default followers;
