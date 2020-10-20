import React from 'react'
import "./styles.css"
import HardQuestions from "./HardQuestions.js"

class MainWindow extends React.Component{
    state={
    }

        renderSwitch=(param)=>{
        switch(param){
        case "hardQuestions":
          return <HardQuestions/>
        // case 'progress':
        //     return <Progress currentUser={this.state.currentUser}/>
        // case 'levels':
        //     return <Levels currentUser={this.state.currentUser}/>
        // case 'prizes':
        //     return <Prizes currentUser={this.state.currentUser}/>
        default: 
            return " Hello "
        }
    }
      
    render(){  
    if (this.props.view === null) {
        return ""
    } else {
        return (
            <>   
            {this.renderSwitch(`${this.props.view}`)}
            </>  
        )
        
    }
        
    }
}
export default MainWindow