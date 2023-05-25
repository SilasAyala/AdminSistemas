import './App.css';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Materials from './materials/pages/Materials.js';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation.js';
import Reciclaje from './materials/pages/Reciclaje';
import About from './materials/pages/about';
import Registro from './materials/pages/Registro/Registro';
import Contacto from './materials/pages/Contacto/Contacto';
import CPago from './materials/pages/Pago/C_Pago';
import LP from './materials/pages/LP/LP';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path ="/" exact>
            <LP/>
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/registro">
            <Registro />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="/pago">
            <CPago/>
          </Route>

          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
