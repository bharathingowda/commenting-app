import React, { Component }from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav }from 'reactstrap'

class CommentApp extends Component{
    render() {
        return (
            <div>
                <Navbar color='dark' expand="md">
                    <NavbarBrand style={{color:'white'}}>Commenting App</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/bharathingowda/">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className='wrapper'>
                    <CommentInput />
                    <CommentList />
                </div>
            </div>
        )
    }
}


export default CommentApp