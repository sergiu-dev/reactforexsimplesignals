import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/css/App.css';

import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import HomePage from './pages/home_page/home_page';
import AllSignalsPage from './pages/all_signals_page/all_signals_page';
import AboutPage from './pages/about_page/about_page';
import ContactPage from './pages/contact_page/contact_page';
import Footer from './components/footer/footer';
import TopButton from './components/reusable/top_button';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/all-signals' component={AllSignalsPage}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/contact' component={ContactPage}/>
        </Switch>
      </main>
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
