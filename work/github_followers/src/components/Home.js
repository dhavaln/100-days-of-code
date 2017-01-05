import React from 'react'
import { Form, Icon, Input, Button, Alert, Table } from 'antd'

import RepoForm from './RepoForm'
import RepoDetail from './RepoDetail'
import Error from './Error'

const FormItem = Form.Item;

const Home = React.createClass({
  
  render(){
    return (
      <div>
        <RepoForm {...this.props} />
        {this.props.repo.loading ? <Icon type='loading' /> : null }
        {this.props.repo.detail ? <RepoDetail repo={this.props.repo.detail} followers={this.props.followers} fetchRepoFollowers={this.props.fetchRepoFollowers} fetchUserDetail={this.props.fetchUserDetail} /> : null }
        {this.props.repo.error ? <Error error={this.props.repo.error} /> : null }        
      </div>
    )
  }
})

export default Home
