import React from 'react'
import "./styles.css"
import HardQuestions from "./HardQuestions.js"
import DifficultPeople from "./DifficultPeople.js"
import Losses from "./Losses.js"
import Examples from "./Examples.js"
import Responses from "./Responses.js"

class MainWindow extends React.Component{
    state={
    }

        renderSwitch=(param)=>{
        switch(param){
        case "hardQuestions":
          return <HardQuestions/>
        case 'difficultPeople':
            return <DifficultPeople/>
        case 'losses':
            return <Losses/>
        case 'examples':
            return <Examples/>
        case 'responses':
            return <Responses/>    
        // case 'prizes':
        //     return <Prizes currentUser={this.state.currentUser}/>
        default: 
            return " Hello "
        }
    }
      
    render(){  
    if (this.props.view === null) {
        return (
             <div className="center">
                <img width="100%" src={require("./images/main.jpeg")}/>
            </div>
        )
       
        
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