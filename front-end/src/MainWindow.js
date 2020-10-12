import React from 'react'
import "./styles.css"
import ChatBot from 'react-simple-chatbot';

class MainWindow extends React.Component{
    state={}

  
      
    render(){  
        const steps = [
        {
          id: '0',
          message: 'Welcome to react chatbot!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Bye!',
          end: true,
        },
      ];
        return (
        <>
        <div class="center">
            <img width="75%" alt="" src={require('./images/main.jpeg')}/>
            <div>
                <ChatBot steps={steps} />
            </div>
        </div>
       
        </>
        )
        
    }
}
export default MainWindow