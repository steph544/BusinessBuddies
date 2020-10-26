import React from 'react'
import "./styles.css"
import { Card, Icon, Button, Image } from 'semantic-ui-react'

class HardQuestions extends React.Component{
    state={
        view: null 
    }

    
  
      
    render(){  

        return (
            <>   
                <Card.Group>
                    <Card>
                    <Card.Content>
                    <Card.Header>Question 1</Card.Header>
                        <Card.Description>
                            Your business is booming and you can hardly keep up. Do you raise your prices?
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            YES
                        </Button>
                        <Button basic color='red'>
                            NO
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>

                    <Card>
                    <Card.Content>
                    <Card.Header>Question 2</Card.Header>
                        <Card.Description>
                        Your customer would like a discount. What do you do?
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Say <br/> "NO WAY"
                        </Button>
                        <Button basic color='red'>
                            Say "WHY?"
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>
                
                </Card.Group>

            </>  
        )
        
    }
}
export default HardQuestions