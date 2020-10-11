import React from 'react'
import { Button } from 'semantic-ui-react'
import "./styles.css"

class SideBar extends React.Component{
    state={}

    render(){
        return (
        <>
        <div class= "button">
            <Button inverted color='blue'>
                Conflict Scenarios
            </Button>
            <p>
            </p>
            <Button inverted color='blue'>
                Income
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
            <Button inverted color='blue'>
                Responses
            </Button>
        </div>
       
        </>
        )
        
    }
}
export default SideBar