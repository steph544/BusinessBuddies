import React, {Component} from 'react'
import "./styles.css" 
import HomePage from "./HomePage.js"

class Signup extends Component{
    state={}
    render(){
        return(
            <div class="parent">
                <div class="div1"><HomePage/> </div>
                <div class="div2"> This is Div 2</div>
                <div class="div3"> This is Div 3</div>
            </div>
            
        ) 
    }
}
export default Signup 