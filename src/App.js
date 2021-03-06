import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './assets/css/App.css';

import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import HomePage from './pages/home_page/home_page';
import AllSignalsPage from './pages/all_signals_page/all_signals_page';
import AboutPage from './pages/about_page/about_page';
import ContactPage from './pages/contact_page/contact_page';
import AuthentictionPage from './pages/authentication_page/authentication_page';
import Footer from './components/footer/footer';
import TopButton from './components/top_button';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        })
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Navigation currentUser={this.state.currentUser} />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/all-signals' component={AllSignalsPage}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/contact' component={ContactPage}/>
            <Route exact path='/sign-in'
               render={() => this.state.currentUser ? (
                  <Redirect to='/'/>
                 ) : (
                  <AuthentictionPage />
                 )
               }
            />
          </Switch>
        </main>
        <Footer />
        <TopButton />
      </div>
    );
  }
}

export default App;
