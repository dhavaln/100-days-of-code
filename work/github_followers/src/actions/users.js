import * as api from '../data/api';

export const USER_DETAIL_FETCH = "USER_DETAIL_FETCH";
export const USER_DETAIL_ERROR = 'USER_DETAIL_ERROR';
export const USER_DETAIL_LOADED = 'USER_DETAIL_LOADED';

export const fetchUserDetail = (url, index) => (dispatch) => {
	dispatch({type: USER_DETAIL_FETCH, index});	
    api.fetchUserDetail(url)
    .then(response => {
      dispatch(userDetailLoaded(response.data, index));      
    })
    .catch(err => {
      dispatch(loadingError(err, index));
    })
}

function loadingError(err, index){
  return {
    type: USER_DETAIL_ERROR,
    message: err.message,
    index
  }
}

function userDetailLoaded(detail, index){
  return {
    type: USER_DETAIL_LOADED,
    detail,
    index
  }
}