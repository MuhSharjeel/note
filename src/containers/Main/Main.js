import React, {Component} from 'react'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Face_Options/UI_Options/UI_Options'
import Two_options from '../../components/Face_Options/UI_Options/UI_Option/UI_Option'
import Backdrop from '../../components/Face_Options/Backdrop/Backdrop'
import Second from'../Second/Second'
//import classes from './Main.css'

class Main extends Component{

    state = {

        new_note : false,
        blank_note: true,

    }
    
    newnoteHandler = () => {
        this.setState({new_note: true});
    
    }

    removenewnoteHandler = () => {
        this.setState({new_note: false});
    
    }

    blanknoteHandler = () => {
        this.setState({blank_note: false});
    
    }
    
        render () {
            
            return (
                
            <div>
                <div style={{
                    transform: this.state.blank_note ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.state.blank_note ? '1' : '0',
                }}>
                    <Logo/>
                    <Two_options note = {this.newnoteHandler}
                                blank= {this.state.blank_note}/>
                                
                    <Menu   show= {this.state.new_note} 
                            remove = {this.removenewnoteHandler}         
                            blanknote= {this.blanknoteHandler}/>
                            
                            <Backdrop remove = {this.removenewnoteHandler}/>
                </div>

                <div style={{
                    transform: !(this.state.blank_note) ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: !(this.state.blank_note) ? '1' : '0'
                }}>
                        <Second back= {this.blanknoteHandler}/>
                    
                    </div>
                
                </div>
            );
        }
    }
    
export default Main;