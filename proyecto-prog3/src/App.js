import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NotFound from './components/NotFound/NotFound';
import Home from './screens/Home/Home';
import VerTodas from './screens/VerTodas/VerTodas';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/" component={VerTodas} />
         <Route component={NotFound} />
        </Switch>
      </main>


      <Footer />
    </div>
  );
}

export default App;
