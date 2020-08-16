import React, {Component} from 'react'
import { Layout } from 'antd';
import './Dashboard.css'
import Header_ from '../../components/Header/Header'

const { Header, Footer, Sider, Content } = Layout;


class Main extends Component{

    state = {    }
    
        render () {
            
            return (
                
            <div>
            <Layout>
            <Header><Header_/></Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
            </div>
            );
        }
    }
    
export default Main;