import { Component, ReactNode } from "react";
import { StyledHeader } from "../../styles/styles";
import Image from "../../components/image/Image";
import urlImg from '../../assets/tablet/image-hero.png'

export default class Header extends Component{
    render():ReactNode{
        return(
            <StyledHeader>
                <Image urlImg ={urlImg} />
            </StyledHeader>
        )
    }
}
