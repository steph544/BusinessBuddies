import React from 'react'
import { Button } from 'semantic-ui-react'
import "./styles.css"

class SideBar extends React.Component{
    state={
        status: null 
    }

    hardQuestions = () => {
        this.props.hardQuestions("hardQuestions")
    }

    difficultPeople = () => {
        this.props.hardQuestions("difficultPeople")
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
            <Button inverted color='blue' onClick={this.difficultPeople}>
                Difficult People
            </Button>
            <p>
            </p>
            <Button inverted color='blue' onClick={this.hardQuestions}>
                Losses
            </Button>
            <p>
            </p>
            <Button inverted color='blue' onClick={this.hardQuestions}>
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