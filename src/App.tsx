import * as React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Button from './components/buttons/Button';

export default class App extends React.Component {
  render() {
    return (
      <div>
       <GlobalStyles /> 
        <h1>Hello meet-lnading-page</h1>       
        <Button  btnType='Primary'/>
      </div>
    );
  }

}
