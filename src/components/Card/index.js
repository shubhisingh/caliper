import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


class MyCard extends Component {
	render() {
		const { name, img, desc } = this.props;
	  return (
			<Card
				title={name}
				image={{uri: img }}
			>
				<Text style={{marginBottom: 10}}>
					{desc}
				</Text>
			</Card>
		);
	}
}

// const mapStateToProps = (state) => ({
//     ...state.employeeReducers
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // fetchEmployees: () => dispatch(employeeActions.fetchEmployees())
//   };
// };

export default MyCard;

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		padding: 16, 
		paddingTop: 30,
		marginTop: 0,
		marginRight: 'auto',
		marginBottom: 0,
		marginLeft: 'auto',
		backgroundColor: '#fff' 
	},
	head: { 
		height: 40, 
		width: 40
	},
	text: { 
		margin: 6 
	},
	card: {
		width: '50%'
	}
});
