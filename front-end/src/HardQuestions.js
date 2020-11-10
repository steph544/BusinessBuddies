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

                    <Card>
                    <Card.Content>
                    <Card.Header>Question 3</Card.Header>
                        <Card.Description>
                        Your customer is not pleased with the timing of service. They feel that you delivered the product way too slowly. 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Discuss your shipping policy again
                        </Button>
                        <Button basic color='red'>
                            Refund the money
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>

                    <Card>
                    <Card.Content>
                    <Card.Header>Question 4</Card.Header>
                        <Card.Description>
                        Your customer is very happy with your service and is wanting to know if you can supply way more than you have on hand. 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Tell them sorry you don't have the stock.
                        </Button>
                        <Button basic color='red'>
                            Figure out a way to fulfill her order and hire more people to do it.
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