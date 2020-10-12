import React from 'react'
import { Button } from 'semantic-ui-react'
import "./styles.css"

class SideBar extends React.Component{
    state={
        status: null 
    }

    hardQuestions = () => {
        
    }

    render(){
        return (
        <>
        <div class= "button">
            <Button inverted color='blue' onClick={this.hardQuestions}>
                Hard Questions
            </Button>
            <p>
            </p>
            <Button inverted color='blue'>
                Difficult People
            </Button>
            <p>
            </p>
            <Button inverted color='blue'>
                Losses
            </Button>
            <p>
            </p>
            <Button inverted color='blue'>
                Examples 
            </Button>
            <p>

            </p>
            <Button inverted color='blue'>
                Responses
            </Button>
        </div>
       
        </>
        )
        
    }
}
export default SideBar