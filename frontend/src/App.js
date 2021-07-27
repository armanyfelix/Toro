import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// Screens
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Store from './screens/Store';
import Cart from './screens/Cart';
import About from './screens/About';
import Contact from './screens/Contact';


// Components
import Navbar from './components/Navbar';
import Drawer from './components/drawer';
import Product from './screens/ProductScreen';
import Footer from './components/Footer';

import Backdrop from './components/backdrop';

const App = () => {

  const [sideToggle, setSideToggle] = useState(false);
 

  return (
    <Router>
        <Navbar click={() => setSideToggle(true)}/>
        <Drawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Gallery" component={Gallery} />
            <Route exact path="/Store" component={Store}/>
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/product/:id" component={Product}/>
            <Route exact path="/cart" component={Cart} />
  
          </Switch>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
