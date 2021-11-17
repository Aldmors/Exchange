import React, { Component } from 'react'

export class SideButton extends Component<any,any> {
    constructor(props:string) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className={this.props.bgColorOnChosen}>
                <img src={this.props.logo} alt="logo of button"/>
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default SideButton