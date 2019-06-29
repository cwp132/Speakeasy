import React from 'react'
import Nav from './nav.js'
import Body from './body.js'

class container extends React.Component{
    render(){
        return(
            <div className="container">
                <Nav/>
                <Body/>
            </div>
        )
    }
}

export default container