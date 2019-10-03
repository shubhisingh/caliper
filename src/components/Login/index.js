import React, { Component } from 'react';
import { Alert, Button, TextInput, View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { authActions } from '../../store/actions';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ecf0f1',
	},
	input: {
		width: 200,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 10,
	},
	button : {
		width  : 100,
		backgroundColor   : "#336699",
		borderRadius : 20,
		marginVertical : 10,
		paddingVertical : 10,
	},
	buttonText : {
		fontSize : 16,
		color : '#ffffff',
		textAlign : 'center',
		fontWeight: 'bold',
	},
});

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	onLogin = () => {
		const { username, password } = this.state;
		this.props.doLogin(username, password);
	}

	componentDidUpdate = () => {
		if(this.props.isLoggedIn) {
			this.props.navigation.navigate("Dashboard");
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.userName}</Text>
				<TextInput
					value={this.state.username}
					onChangeText={(username) => this.setState({ username })}
					placeholder={'Username'}
					style={styles.input}
				/>
				<TextInput
					value={this.state.password}
					onChangeText={(password) => this.setState({ password })}
					placeholder={'Password'}
					secureTextEntry={true}
					style={styles.input}
				/>
				<TouchableOpacity style = {styles.button}  onPress={() => this.onLogin()} >
					<Text style = {styles.buttonText}>Login</Text> 
				</TouchableOpacity>
			</View>
		);
	}
}

const mapStateToProps = state => {
	console.log('state=', state);
	return {...state.authReducers};
};

const mapDispatchToProps = dispatch => {
	return {
		doLogin: (username, password) => dispatch(authActions.doLogin(username, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);