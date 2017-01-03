import React from 'react';
import { Form, Icon, Input, Button, Alert, Table } from 'antd';
const FormItem = Form.Item;

const RepoForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        this.props.fetchRepoDetail(values.user + '/' + values.repo)
      }
    });
  },

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit} style={{paddingBottom: '10px'}}>
        <FormItem>
          {getFieldDecorator('user', {
            rules: [{ required: true, message: 'Please input username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('repo', {
            rules: [{ required: true, message: 'Please input repo name' }],
          })(
            <Input addonBefore={<Icon type="github" />} placeholder="Repository" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Followers</Button>
        </FormItem>
      </Form>
    );
  }
}))

const Error = React.createClass({

  render(){
    return <Alert
    message="Error"
    description={this.props.error}
    type="error" />
  }
})

const Followers = React.createClass({
  render(){

    const columns = [{
      title: 'Name',
      dataIndex: 'login',
      key: 'login',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Email'      
    }];

    return <div>
      <Table columns={columns} dataSource={this.props.users} pagination={false}/>
    </div>
  }
})

const RepoDetail = React.createClass({

  componentDidMount(){
    if(this.props.repo && !this.props.followers.users){
      console.log('load followers');
      this.props.fetchRepoFollowers( this.props.repo.stargazers_url, 0);
    }
  },
  
  render(){
    return <div>
      <h2>Followers: {this.props.repo.stargazers_count}</h2>
      <Followers users={this.props.followers.users} />
    </div>
  }
})

const Home = React.createClass({
  
  render(){
    return (
      <div>
        <RepoForm {...this.props} />
        {this.props.repo.loading ? <Icon type='loading' /> : null }
        {this.props.repo.detail ? <RepoDetail repo={this.props.repo.detail} followers={this.props.followers} fetchRepoFollowers={this.props.fetchRepoFollowers} /> : null }
        {this.props.repo.error ? <Error error={this.props.repo.error} /> : null }        
      </div>
    )
  }
});

export default Home;
