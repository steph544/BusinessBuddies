import React from 'react'
import "./styles.css"

class HomePage extends React.Component{
    state={}

    home = () =>{
        this.props.home(null)
    }

    render(){
        return (
        <>
        <div class="logo-header">

            <img onClick={this.home} width="18%" alt="" src={require('./images/BBLogo.png')}/>
          
        </div>
       
        </>
        )
        
    }
}
export default HomePage