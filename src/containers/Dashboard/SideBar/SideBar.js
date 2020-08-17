import React, {Component} from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


const SideBar =()=>{
    
    return (
                
            <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem>Dashboard</MenuItem>
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                    <MenuItem>Component 3</MenuItem>
                </Menu>
            </ProSidebar>;
            </div>
            );
        }
    
export default SideBar;