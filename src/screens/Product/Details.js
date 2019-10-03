import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import { productActions, cartActions } from '../../store/actions';

class Details extends Component {
	componentDidMount() {
		this.props.fetchProductDetails(this.props.navigation.state.params.productId);
	}

	handleAddToCart = () => {
		this.props.addProductToCart(this.props.details);
	}

	render() {
		return (
			<View style={styles.container}>
				<View >
					<Image
						style={{width: 300, height: 300}}
						source={{uri: this.props.details.img}}
					/>
				</View >
				<View style={styles.billings}>
					<Text style={styles.text}>Type: Staight </Text>
					<Text style={styles.text}>Fabric: Cotton</Text>
					<Text style={styles.text}>Color:	Black </Text>
					<Text style={styles.text}>Pattern: Kurta</Text>
					<View style={{flexDirection:'row'}} >
						{this.props.details.isAddedToCart ?
						(<Text>Added To Cart</Text>)
						:
						(<Button
							onPress={() => this.handleAddToCart()}
							title='Add To Cart'
							color="#f194ff"
						>
       					</Button>)}
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	if(state.productReducers.productDetails.id === ownProps.navigation.state.params.productId) {
		return {details: {...state.productReducers.productDetails}};
	}
	return {details: {}};
};

const mapDispatchToProps = (dispatch) => {
  return {
	fetchProductDetails: (productId) => dispatch(productActions.fetchProductDetails(productId)),
	addProductToCart: (productId) => dispatch(cartActions.addProductToCart(productId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		padding: 16, 
		paddingTop: 30,
		marginTop: 0,
		marginRight: 'auto',
		marginBottom: 0,
		marginLeft: 'auto',
		// backgroundColor: '#fff' 
	},
	text: {
		margin: 5
	},
	billings: {
		padding:20,
		height: 130,
		margin: 10,

	},
	rate: {
		color:'yellow'
	},
	button: {
		alignItems: 'center',
		backgroundColor: 'blue',
		borderWidth: 1,
		borderColor: 'blue',
		padding: 10,
  	},
});
