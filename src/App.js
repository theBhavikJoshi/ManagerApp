import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";

import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCFxMJ_1Lxs8NVJaRJyDXlTMRfegOn07wI",
      authDomain: "managerapp-native.firebaseapp.com",
      databaseURL: "https://managerapp-native.firebaseio.com",
      projectId: "managerapp-native",
      storageBucket: "managerapp-native.appspot.com",
      messagingSenderId: "743648421889"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
