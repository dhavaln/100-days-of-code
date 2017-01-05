import React from 'react'
import { Form, Icon, Input, Button, Alert, Table } from 'antd'
const FormItem = Form.Item

const RepoForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        this.props.fetchRepoDetail(values.user + '/' + values.repo)
      }
    })
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

export default RepoForm;