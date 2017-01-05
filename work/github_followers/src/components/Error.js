import React from 'react'
import { Form, Icon, Input, Button, Alert, Table } from 'antd'

const Error = React.createClass({

  render(){
    return <Alert
    message="Error"
    description={this.props.error}
    type="error" />
  }
})

export default Error