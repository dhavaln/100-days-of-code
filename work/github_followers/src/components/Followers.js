import React from 'react';
import { Form, Icon, Input, Button, Alert, Table } from 'antd';

export const Follower = React.createClass({

	shouldComponentUpdate(nextProps, nextState) {
	   return this.props.user.loading != nextProps.user.loading || this.props.user.email != nextProps.user.email;
	},

	render(){
		console.log('rendering ', this.props.user.id)
		return <tr>
			<td><img src={this.props.user.avatar_url} width="30px"/></td>
			<td>{this.props.user.login}</td>
			<td>
				{this.props.user.loading ? <Icon type='loading' /> : this.props.user.email }
			</td>
		</tr>
	}
})

const Followers = React.createClass({
	getInitialState(){
		return {
			userIndex: 0
		}
	},

  componentDidMount(){
    console.log('rendering followers');
    if(!this.props.users[this.state.userIndex].email){
      this.props.fetchUserDetail(this.props.users[this.state.userIndex].url, this.state.userIndex, this.props.users.length);      
    }    
  },  

  componentWillReceiveProps(){  
  	// console.log('data loaded', this.props.users[0].loading);
  	if(this.props.users[this.state.userIndex].loading === true){
  		// console.log('load data for next user', (this.state.userIndex+1))
  		if( (this.state.userIndex + 1) >= this.props.users.length ){
  			return
  		}
  		
  		this.setState({
  			userIndex: this.state.userIndex+1
  		}, function(){
  			this.props.fetchUserDetail(this.props.users[this.state.userIndex].url, this.state.userIndex, this.props.users.length);
  		})
  	}
  },

  render(){

    if(!this.props.users) return <div/>;    
    this.props.users.map(u => {u.key = u.id});

    return <table width="100%">
    	<thead>
    	<tr>
    		<td></td>
    		<td>User</td>
    		<td>Email</td>
    		</tr>
    	</thead>
    	<tbody>
    		{this.props.users.map(user => <Follower user={user} key={user.id}/>)}
    	</tbody>
    </table>
  }
})

export default Followers;