import React from 'react';
import Followers from './Followers'

import Error from './Error'

const RepoDetail = React.createClass({

  componentDidMount(){
    if(this.props.repo && !this.props.followers.users){
      this.props.fetchRepoFollowers( this.props.repo.stargazers_url)
    }
  },
  
  render(){
    return <div>
      <h2>Followers: {this.props.repo.stargazers_count}</h2>
      {this.props.followers.users ? <Followers users={this.props.followers.users} fetchUserDetail={this.props.fetchUserDetail} /> : null}
      {this.props.followers.error ? <Error error={this.props.followers.error} /> : null }        
    </div>
  }
})

export default RepoDetail