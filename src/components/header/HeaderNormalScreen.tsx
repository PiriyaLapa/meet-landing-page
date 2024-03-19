import  { Component, ReactNode } from 'react'
import { StyledHeaderNormalScreen } from '../../styles/styles'
import Image from "../../components/image/Image";
import urlImg from "../../assets/tablet/image-hero.webp";
import CardHeader from '../cards/CardHeader';


export default class HeaderNormalScreen extends Component {
  render():ReactNode {
    return (
      <StyledHeaderNormalScreen>
          <Image urlImg={urlImg} />
          <CardHeader />
      </StyledHeaderNormalScreen>
    )
  }
}