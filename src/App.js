import React, { Component } from 'react';
import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import Auth from './pages/Auth/Auth.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './utils/firebase';

export default class App extends Component {
  unsubscribeFromAuth = null;
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        if (authenticatedUser) {
          const userRef = await createUserProfileDocument(authenticatedUser);
          userRef.onSnapshot((snapShot) => {
            console.log(snapShot.data());
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
          });
        } else {
          this.setState({ currentUser: authenticatedUser });
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={Auth} />
        </Switch>
      </div>
    );
  }
}
