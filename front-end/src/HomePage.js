import React from 'react'
import "./styles.css"

class HomePage extends React.Component{
    state={
        customers: 0,
        income: 0
    }

    render(){
        return (
        <>
        <div class="logo-header">
            <img width="18%" alt="" src={require('./images/BBLogo.png')}/>
                Current Customers: {this.state.customers}
                Current Income: {this.state.income}
        </div>
       
        </>
        )
        
    }
}
export default HomePage