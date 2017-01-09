import React from 'react';
import { Form, Icon, Input, Button, Alert, Table, Card } from 'antd';

export const Follower = React.createClass({

	shouldComponentUpdate(nextProps, nextState) {		
	   return this.props.user.loading != nextProps.user.loading || this.props.user.key != nextProps.user.key;
	},

	render(){
		console.log('rendering ', this.props.user.id)
		return <Card style={{ width: 150, float: 'left', margin: '5px' }} bodyStyle={{ padding: 0 }}>
		    <div className="custom-image">
		      <img alt="example" width="150" src={this.props.user.avatar_url} />
		    </div>
		    <div className="custom-card">
		      <h3>{this.props.user.name || this.props.user.login}</h3>
		      <p>
		      	{this.props.user.loading ? <Icon type='loading' /> : (this.props.user.hasEmail === false ? 'No Email' : <a href="this.props.user.email">{this.props.user.email}</a> ) }
		      </p>
		    </div>
		  </Card>
		// return <tr>
		// 	<td>{this.props.index + 1}</td>
		// 	<td><img src={this.props.user.avatar_url} width="30px"/></td>
		// 	<td>{this.props.user.name || this.props.user.login}</td>
		// 	<td>
		// 		{this.props.user.loading ? <Icon type='loading' /> : (this.props.user.hasEmail === false ? 'No Email' : <a href="this.props.user.email">{this.props.user.email}</a> ) }
		// 	</td>
		// </tr>
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
    console.log('registering page scroll event listener')
    document.addEventListener('scroll', this.onScroll)

    // if(!this.props.users[this.state.userIndex].email){
    //   this.props.fetchUserDetail(this.props.users[this.state.userIndex].url, this.state.userIndex, this.props.users.length);      
    // }
  },  

  componentWillUnmount(){
  	console.log('removing the event listener')
  	document.removeEventListener('scroll', this.onScroll)
  },

  onScroll(event){
	if (document.body.scrollHeight ==  document.body.scrollTop + window.innerHeight) {
	    this.props.onPageBottom();
	}
  },

  componentWillReceiveProps(){  
  	// console.log('data loaded', this.props.users[0].loading);
  	if(this.props.users[this.state.userIndex].loading === true){  		
  		if( (this.state.userIndex + 1) >= this.props.users.length ){
  		// if( (this.state.userIndex + 1) >= 5 ){
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

    return <div>    	
    	{this.props.users.map( (user, index) => <Follower user={user} key={user.login} index={index}/>)}
    	<div id="view_footer"></div>
    </div>
  }
})

export default Followers;