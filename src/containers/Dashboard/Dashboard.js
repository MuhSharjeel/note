import React, {Component} from 'react'
import { Layout } from 'antd';
import './Dashboard.css'
import Header_ from '../../components/Header/Header'
import SideBar  from './SideBar/SideBar'

const { Header, Footer, Sider, Content } = Layout;


class Main extends Component{

    state = {    }
    
        render () {
            
            return (
                
            <div>
            <Layout>
            <Header><Header_/></Header>
            <Layout>
              <Content><SideBar/></Content>
            </Layout>
          </Layout>
            </div>
            );
        }
    }
    
export default Main;