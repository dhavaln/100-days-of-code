import React from 'react';
import { Form, Icon, Input, Button, Alert, Table, Card } from 'antd';

export const Follower = React.createClass({
	componentDidMount(){
		if(!this.props.user.loading && !this.props.user.email){
			this.props.fetchUserDetail(this.props.user.url, this.props.index)
		}
	},

	shouldComponentUpdate(nextProps, nextState) {		
	   return this.props.user.loading != nextProps.user.loading || this.props.user.key != nextProps.user.key;
	},

	render(){
		return <tr>			
			<td><img src={this.props.user.avatar_url} width="30px"/></td>
			<td>{this.props.user.name || this.props.user.login}</td>
			<td>
				{this.props.user.loading ? <Icon type='loading' /> : (this.props.user.hasEmail === false ? 'No Email' : <a href="this.props.user.email">{this.props.user.email}</a> ) }
			</td>
		</tr>
	}
})

const Followers = React.createClass({	
  componentDidMount(){    
    document.addEventListener('scroll', this.onScroll)    
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

  render(){
    if(!this.props.users) return <div/>;    
    this.props.users.map(u => {u.key = u.id});

    return <div>
    	<table style={{width: '100%'}}>
	    	<thead>
	    		<tr><td></td><td></td><td></td></tr>
	    	</thead>
    		<tbody>
    			{this.props.users.map( (user, index) => <Follower user={user} key={index} index={index} fetchUserDetail={this.props.fetchUserDetail}/>)}
    		</tbody>
    	</table>
    	<div id="view_footer"></div>
    </div>
  }
})

export default Followers;