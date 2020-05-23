import React, { Component } from 'react';
import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import Auth from './pages/Auth/Auth.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './utils/firebase';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.action';

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        if (authenticatedUser) {
          const userRef = await createUserProfileDocument(authenticatedUser);
          userRef.onSnapshot((snapShot) => {
            console.log(snapShot.data());
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
          });
        } else {
          setCurrentUser(authenticatedUser);
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
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/auth'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <Auth />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
