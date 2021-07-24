import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// Screens
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Store from './screens/Store';
import Cart from './screens/Cart';
import Backdrop from './components/backdrop';

// Components
import Navbar from './components/Navbar';
import Drawer from './components/drawer';
import Cuadro from './components/Cuadro';
import Footer from './components/Footer';
// import MyCarousel from './components/Carousel';


function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
        <Navbar click={() => setSideToggle(true)}/>
        <Drawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        {/* <MyCarousel /> */}
        <Footer/>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Gallery" component={Gallery} />
            <Route exact path="/Store" component={Store}/>
            <Route exact path="/cuadro/:id" component={Cuadro}/>
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </main>
    </Router>
  );
}

export default App;
