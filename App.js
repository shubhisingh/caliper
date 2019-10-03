import React, { Component } from 'react';
import Dashboard from './src/components/EmployeeList';
import {Provider} from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import store from './src/store';
import Login from './src/components/Login';
import ProductList from './src/screens/Product/List';
import Details from './src/screens/Product/Details';
import AppHeader from './src/components/AppHeader';
// import Employeelist from './App/appiness/employeelist';
import Cart from './src/components/Cart';

const AppStack = StackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			title: "Login",
			header: null,
			gesturesEnabled: false,
		}
	},
	Dashboard: {
		screen: Dashboard,
		navigationOptions:{
			title: "Dashboard",
			header: null,
			gesturesEnabled: false,
		}
	},
	ProductList: {
		screen: ProductList,
		navigationOptions: {
			title: "ProductList",
			header: props => <AppHeader {...props} />,
			gesturesEnabled: false,
		}
	},
	Details: {
		screen: Details,
		navigationOptions: {
			title: "Details",
			header: props => <AppHeader {...props} />,
			gesturesEnabled: false,
		}
	},
	Cart: {
		screen: Cart,
		navigationOptions: {
			title: "Cart",
			header: props => <AppHeader {...props} />,
			gestureEnabled: false
		}
	}
}, {
	initialRouteName: 'ProductList'
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state =  {};
		const { navigation } = this.props;
	}

	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<AppStack />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "transparent"
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	icon: {
		paddingLeft: 10
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
