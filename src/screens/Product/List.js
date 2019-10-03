import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import {connect} from 'react-redux';
import {productActions} from '../../store/actions';

class List extends Component {
	componentDidMount() {
		this.props.fetchProductList();
	}

	handleOnPress = id => {
		this.props.navigation.navigate('Details', {productId: id});
	};

	render() {
	  return (
			<View>
				<ScrollView>
					{this.props.products.map((product, idx) => {
						return (
							<TouchableOpacity
								key={idx}
								onPress={() => this.handleOnPress(product.id)}
							>
								<Card
									name={product.name}
									img={product.img}
									desc={product.desc}
								/>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
	  );
	}
}

const mapStateToProps = (state) => {
	console.log(state.productReducers);
    return {...state.productReducers};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductList: () => dispatch(productActions.fetchProductList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

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
