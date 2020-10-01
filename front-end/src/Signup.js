import React, {Component} from 'react'
import "./styles.css" 
import HomePage from "./HomePage.js"
import SideBar from "./SideBar.js"
import MainWindow from "./MainWindow.js"

class Signup extends Component{
    state={

    }



    render(){
        return(
            <div class="parent">
                <div class="div1"><HomePage/> </div>
                <div class="div2"> <SideBar/></div>
                <div class="div3"> <MainWindow/></div>
            </div>
            
        ) 
    }
}
export default Signup 