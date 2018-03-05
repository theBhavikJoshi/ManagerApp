import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
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
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		)
	}
}


export default App;