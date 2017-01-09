import * as api from '../data/api';

export const FOLLOWER_DETAIL_FETCH = "FOLLOWER_DETAIL_FETCH";
export const FOLLOWER_DETAIL_ERROR = 'FOLLOWER_DETAIL_ERROR';
export const FOLLOWER_DETAIL_LOADED = 'FOLLOWER_DETAIL_LOADED';

export const fetchRepoFollowers = (url, page = 1) => (dispatch) => {
	dispatch({type: FOLLOWER_DETAIL_FETCH});
	console.log(`loading followers for page ${page}`);
    api.fetchRepoFollowers(url, page)
    .then(response => {
      dispatch(followersLoaded(response.data, page));
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

function followersLoaded(users, page){
  return {
    type: FOLLOWER_DETAIL_LOADED,
    users,
    page
  }
}