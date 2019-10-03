import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/Card';
import {connect} from 'react-redux';
import {cartActions} from '../../store/actions';

class Cart extends Component {
	componentDidMount() {
		this.props.fetchCart();
	}
    render() {
        return (
			<View>
				<ScrollView>
					{this.props.products.map((product, idx) => {
						return (
							<Card
								name={product.name}
								img={product.img}
							/>
						);
					})}
				</ScrollView>
			</View>
        );
    }
}
const mapStateToProps = (state) => {
	return {products: state.cartReducers.products};
};

const mapDispatchToProps = (dispatch) => {
  return {
	fetchCart: () => dispatch(cartActions.fetchCartProducts())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
