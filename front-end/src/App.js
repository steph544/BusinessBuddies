import React from 'react';
// import './styles.css'
import Signup from "./Signup.js"
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
  
  state = {
    loggedIn: true,
    view: null  
  }

  render(){

    return (
  
    <div class="bg-img">
        <Signup/>
    </div>
    

       
    )
  }
}

export default App;