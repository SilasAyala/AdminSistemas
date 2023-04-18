import './App.css';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Materials from './materials/pages/Materials.js';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation.js';
import Reciclaje from './materials/pages/Reciclaje';
import About from './materials/pages/about';
import Registro from './materials/pages/Registro/Registro';
import Contacto from './materials/pages/Contacto/Contacto';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path ="/" exact>
            
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

          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
