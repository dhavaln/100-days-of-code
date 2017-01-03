import * as api from '../data/api';

export const FOLLOWER_DETAIL_FETCH = "FOLLOWER_DETAIL_FETCH";
export const FOLLOWER_DETAIL_ERROR = 'FOLLOWER_DETAIL_ERROR';
export const FOLLOWER_DETAIL_LOADED = 'FOLLOWER_DETAIL_LOADED';

export const fetchRepoFollowers = (url, page) => (dispatch) => {
	dispatch({type: FOLLOWER_DETAIL_FETCH});
	console.log('loading followers');
    api.fetchRepoFollowers(url, page)
    .then(response => {
      dispatch(followersLoaded(response.data));
    })
    .catch(err => {
      dispatch(loadingError(err));
    })
}

function loadingError(err){
  return {
    type: FOLLOWER_DETAIL_ERROR,
    message: err.message
  }
}

function followersLoaded(users){
  return {
    type: FOLLOWER_DETAIL_LOADED,
    users
  }
}