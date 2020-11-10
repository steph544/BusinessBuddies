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
                
                    <Card>
                    <Card.Content>
                    <Card.Header>Person 3</Card.Header>
                        <Card.Description>
                            This customer is being very rude and you are unable to calm them down. What do you do next?
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Let them speak their mind.
                        </Button>
                        <Button basic color='red'>
                            Walk away and tell them you do not want to do business with them.
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>

                    <Card>
                    <Card.Content>
                    <Card.Header>Person 4</Card.Header>
                        <Card.Description>
                            This customer wants you to do extra service for them for no additional cost.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Stand firm and tell them the extra fee.
                        </Button>
                        <Button basic color='red'>
                            Just do the extra work for free.
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>

                    <Card>
                    <Card.Content>
                    <Card.Header>Person 5</Card.Header>
                        <Card.Description>
                            This customer is getting very nit-picky with you and wants you to spend extra time fulfilling their request.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Weight out future long term business with this person to see if it's worth the time.
                        </Button>
                        <Button basic color='red'>
                            Decide they are too much trouble and move on.
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