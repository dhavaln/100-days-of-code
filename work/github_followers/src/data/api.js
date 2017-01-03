import axios from 'axios';

const URL = "https://api.github.com";

export const fetchRepoDetail = (repo) => {
	return axios.get( `${URL}/repos/${repo}`)
}

export const fetchRepoFollowers = (url, page) => {
	return axios.get(url)
}

