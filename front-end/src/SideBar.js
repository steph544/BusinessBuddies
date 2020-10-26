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

    losses = () => {
        this.props.hardQuestions("losses")
    }

    responses = () => {
        this.props.hardQuestions("responses")
    }

    examples = () => {
        this.props.hardQuestions("examples")
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
            <Button inverted color='blue' onClick={this.losses}>
                Losses
            </Button>
            <p>
            </p>
            <Button inverted color='blue' onClick={this.examples}>
                Examples 
            </Button>
            <p>

            </p>
            <Button inverted color='blue' onClick={this.responses}>
                Responses
            </Button>
        </div>
       
        </>
        )
        
    }
}
export default SideBar