import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './screens/Home/Home';
import VerTodasPop from './screens/VerTodasPop/VerTodasPop';
import VerTodasTop from './screens/VerTodasTop/VerTodasTop';
import Favoritos from './screens/Favoritos/Favoritos';




function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
         <Route exact={true} path="/" component={Home} />
         <Route  path="/VerTodasPop" component={VerTodasPop} />
         <Route  path='/VerTodasTop' component={VerTodasTop} />
         <Route  path='/Favoritos' component={Favoritos}/>
         <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
