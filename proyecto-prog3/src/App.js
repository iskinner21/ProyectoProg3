import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './screens/Home/Home';
import VerTodasPop from './screens/VerTodasPop/VerTodasPop';
import VerTodasTop from './screens/VerTodasTop/VerTodasTop';




function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/VerTodasPop" component={VerTodasPop} />
         <Route exact path='/VerTodasTop' component={VerTodasTop} />
         <Route component={NotFound} />
        </Switch>
      </main>


      <Footer />
    </div>
  );
}

export default App;
