import React from 'react'
import { useLocation } from 'react-router'

export default function SideButton(props:any) {
    let location = useLocation()
    let pathFromProp = `/${props.name.toLowerCase()}` 
    const GenerateButtonHighlight = () => {
        if(pathFromProp === location.pathname){
            console.log(location.pathname, pathFromProp)
            return "side-top-button green"
        } else {
            console.log(location.pathname,pathFromProp)
            return "side-top-button black"
        }
    }
    return (
        <div className={GenerateButtonHighlight()}>
            <img src={props.logo} alt="logo of button"/>
            <span>{props.name}</span>
        </div>
    )
}
