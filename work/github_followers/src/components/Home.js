import React from 'react';
import { Form, Icon, Input, Button, Alert, Table } from 'antd';
const FormItem = Form.Item;
import RepoForm from './RepoForm';


const Error = React.createClass({

  render(){
    return <Alert
    message="Error"
    description={this.props.error}
    type="error" />
  }
})

const Followers = React.createClass({
  componentDidMount(){
    console.log('rendering followers');
    if(!this.props.users[0].email){
      this.props.fetchUserDetail(this.props.users[0].url, 0);
    }    
  },

  componentWillReceiveProps(){
    console.log('new props received');
  },

  render(){
    if(!this.props.users) return <div/>;

    const columns = [{
      title: 'Name',
      dataIndex: 'login',
      key: 'login',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => {        
        return <a href="mailto:#">{text}</a>
      },
    }];

    this.props.users.map(u => {u.key = u.id});

    return <div>
      <Table columns={columns} dataSource={this.props.users} pagination={false}/>
    </div>
  }
})

const RepoDetail = React.createClass({

  componentDidMount(){
    if(this.props.repo && !this.props.followers.users){
      this.props.fetchRepoFollowers( this.props.repo.stargazers_url);
    }
  },
  
  render(){
    return <div>
      <h2>Followers: {this.props.repo.stargazers_count}</h2>
      {this.props.followers.users ? <Followers users={this.props.followers.users} fetchUserDetail={this.props.fetchUserDetail} /> : null}
    </div>
  }
})

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
});

export default Home;
