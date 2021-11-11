import React, { Component } from 'react'
import Search from './NavbarComponents/Search'
import Exchange from './NavbarComponents/Exchange'
import Notifications from './NavbarComponents/Notifications'

export class Navbar extends Component<any,any> {

    render() {
        return (
            <nav className="navbar">
                <Exchange/>
                <Search/>
                <Notifications/>
            </nav>
        )
    }
}

export default Navbar
