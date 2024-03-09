import {Component, ReactNode} from 'react';
import { StyledNavbar } from '../styles/styles';

export default class Navbar extends Component{
    render():ReactNode{
        return(
           <StyledNavbar>
            <h1>Navbar </h1> 
           </StyledNavbar> 
        )
    }
}