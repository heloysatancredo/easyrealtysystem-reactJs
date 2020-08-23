import React from 'react';

//Router
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//Components
import { PersistentDrawerRight, HeaderBar, Footer, HomePage, Services, Pricing, Team, Contact } from './Components'

//Styling
import { ThemeProvider } from '@material-ui/styles';
import theme from './Components/theme';
import './Assets/sass/styles.scss';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <PersistentDrawerRight />
          <HeaderBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Services' component={Services} />
          <Route exact path='/Pricing' component={Pricing} />
          <Route exact path='/Team' component={Team} />
          <Route exact path='/Contact' component={Contact} />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
