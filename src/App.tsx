import * as React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Button from './components/buttons/Button';
import LandingPage from './pages/LandingPage';

export default class App extends React.Component {
  render() {
    return (
      <div>
       <GlobalStyles /> 
          <LandingPage />
        <Button  btnType='Primary'/>
        <Button  btnType='Secondary'/>
      </div>
    );
  }

}
