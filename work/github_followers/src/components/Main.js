import React from 'react';
import {Link} from 'react-router';
import { Layout, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Main = React.createClass({
    render(){
      return (
        <Layout style={{textAlign: 'center'}}>
        <Header>
          <h1 style={{color: 'white'}}>Github Repo Followers</h1>
        </Header>
        <Layout>          
          <Content style={{ background: '#fff', padding: 24, minHeight: 280}}>
            {React.cloneElement(this.props.children, this.props)}          
          </Content>          
        </Layout>
        <Footer>
          <div >
            Made with <Icon type="heart" style={{color: 'red'}}/> for <a href="https://twitter.com/hashtag/100daysofcoding?src=hash" target="_blank">#100DaysOfCoding</a>
          </div>
        </Footer>
      </Layout>
      )
    }
});

export default Main;
