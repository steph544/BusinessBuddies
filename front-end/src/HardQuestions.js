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
                        There is a customer that is complaining that your product is not what they expected it to be. What do you do?
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            REFUND
                        </Button>
                        <Button basic color='red'>
                            KEEP MONEY
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