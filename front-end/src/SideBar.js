import React from 'react'
import { Button } from 'semantic-ui-react'
import "./styles.css"

class SideBar extends React.Component{
    state={}

    render(){
        return (
        <>
        <div>
            <Button inverted color='blue'>
                Conflicts
            </Button>
        </div>
       
        </>
        )
        
    }
}
export default SideBar