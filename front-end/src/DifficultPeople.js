import React from 'react'
import "./styles.css"
import { Card, Icon, Button, Image } from 'semantic-ui-react'

class DifficultPeople extends React.Component{
    state={
        view: null 
    }

    
  
      
    render(){  

        return (
            <>   
                 <Card.Group>
                    <Card>
                    <Card.Content>
                    <Card.Header>Person 1</Card.Header>
                        <Card.Description>
                            This person is very upset that your product/service is not what they had expected. How do you solve this?
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Give a refund
                        </Button>
                        <Button basic color='red'>
                            Explain why you cannot give a refund
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>

                    <Card>
                    <Card.Content>
                    <Card.Header>Person 2</Card.Header>
                        <Card.Description>
                            This person is asking you to do much more than what you originally offered in your service. How do you tell them you cannot do more without getting paid?
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Ask for payment first
                        </Button>
                        <Button basic color='red'>
                            Tell them no.
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>
                
                </Card.Group>
            </>  
        )
        
    }
}
export default DifficultPeople