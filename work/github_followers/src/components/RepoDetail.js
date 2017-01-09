import React from 'react';
import Followers from './Followers'
import { Form, Icon, Input, Button, Alert, Table } from 'antd'

import Error from './Error'

const RepoDetail = React.createClass({

  componentDidMount(){
    if(this.props.repo && !this.props.followers.users){
      this.props.fetchRepoFollowers( this.props.repo.stargazers_url)
    }
  },
  
  onPageBottom(){
  	if(this.props.followers.users.length < this.props.repo.stargazers_count){
  		if(!this.props.followers.loading){
	  		console.log(`page bottom reached, load followers for page ${this.props.followers.page + 1}`);
	  		this.props.fetchRepoFollowers( this.props.repo.stargazers_url, this.props.followers.page + 1)
  		}
  	}
  },

  render(){
    return <div>
      <h2>Followers: {this.props.repo.stargazers_count} | Forks: {this.props.repo.forks_count}</h2>
      {this.props.followers.users ? <Followers users={this.props.followers.users} fetchUserDetail={this.props.fetchUserDetail} onPageBottom={this.onPageBottom}/> : null}
      {this.props.followers.error ? <Error error={this.props.followers.error} /> : null }     
      {this.props.followers.loading ? <Icon type='loading' /> : null}   
    </div>
  }
})

export default RepoDetail