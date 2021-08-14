import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// Screens
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Shop from './screens/Shop';
import CartScreen from './screens/CartScreen';
import About from './screens/About';
import Contact from './screens/ContactScreen';


// Components
import Navbar from './components/Navbar';
import Drawer from './components/drawer';
import Product from './screens/ProductScreen';
import Footer from './components/Footer';
import Backdrop from './components/backdrop';
import Checkout from './components/Checkout/Checkout';




const App = () => {

  const [sideToggle, setSideToggle] = useState(false);
 

  return (
    <Router>
        <Navbar click={() => setSideToggle(true)}/>
        <Drawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        <main className="app">
          <Switch>
            <Route exact path="/" component={props => <Home {...props} />} />
            <Route exact path="/Gallery" component={props => <Gallery {...props} />} />
            <Route exact path="/Shop" component={props => <Shop {...props} />}/>
            <Route exact path="/About" component={props => <About {...props} />} />
            <Route exact path="/Contact" component={props => <Contact {...props} />} />
            <Route exact path="/product/:id" component={props => <Product {...props} />}/>
            <Route exact path="/cart" component={props => <CartScreen {...props} />} />
            <Route exact path="/Checkout" component={props => <Checkout {...props} />} />
          </Switch>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
