import { Component, ReactNode } from "react";
import { StyledLandingPage, StyledScreenSizeDetect } from "../styles/styles";
import detectScreenSize from "../helpers/screenSizeHelper";
import Header from "./sections/Header";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";
import Navbar from "../navbar/Navbar";

export default class LandingPage extends Component {
  // Define initial state to hold window dimensions
  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };

  // Function to update window dimensions in state
  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  // Add event listener to update window dimensions when resized
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  // Remove event listener when component is unmounted
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  render(): ReactNode {
    const { windowWidth, windowHeight } = this.state;
    const screenNow = detectScreenSize(windowWidth);

    return (
      <StyledLandingPage>
        <Navbar />
        <Header />
        <Gallery />
        <Footer/>
        <StyledScreenSizeDetect>
          <h1>Now device for : {screenNow}</h1>
          <h1>Width of screen: {windowWidth}</h1>
          <h1>Height of screen: {windowHeight}</h1>
        </StyledScreenSizeDetect>
      </StyledLandingPage>
    );
  }
}
