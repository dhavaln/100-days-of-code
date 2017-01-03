import * as api from '../data/api';
import followers from './followers';

export const REPO_DETAIL_FETCH = 'REPO_DETAIL_FETCH';
export const REPO_DETAIL_ERROR = 'REPO_DETAIL_ERROR';
export const REPO_DETAIL_LOADED = 'REPO_DETAIL_LOADED';

export const fetchRepoDetail = (repo) => (dispatch) => {
  dispatch({type: REPO_DETAIL_FETCH});  
  api.fetchRepoDetail(repo)
  .then(response => {
    dispatch(repoDetailLoaded(response.data));
  })
  .catch(err => {
    dispatch(loadingError(err));
  })
}

function loadingError(err){
  return {
    type: REPO_DETAIL_ERROR,
    message: err.message
  }
}

function repoDetailLoaded(detail){
  return {
    type: REPO_DETAIL_LOADED,
    detail,
  }
}