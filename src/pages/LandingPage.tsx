import { Component, ReactNode } from "react";
import { StyledLandingPage} from "../styles/styles";
// import detectScreenSize from "../helpers/screenSizeHelper";
import Header from "./sections/Header";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";
import Navbar from "../navbar/Navbar";
// import ScreenSizeDetect from "../components/ScreenSizeDetect";

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
    const { windowWidth  } = this.state;
    // const screenNow = detectScreenSize(windowWidth);

    return (
      <StyledLandingPage>
        <Navbar />
        <Header />
        <Gallery />
        <Footer windowWidth={windowWidth}/>
        {/* <ScreenSizeDetect screenNow={screenNow} {...this.state} />  */}
      </StyledLandingPage>
    );
  }
}
