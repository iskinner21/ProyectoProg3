import logo from './logo.svg';
import './App.css';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
         <Route component={NotFound} />
        </Switch>
      </main>


      <Footer />
    </div>
  );
}

export default App;
