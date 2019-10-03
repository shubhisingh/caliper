import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Header, withBadge, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {cartActions} from '../../store/actions';

class AppHeader extends Component {
    handleCartClick = () => {
        this.props.navigation.navigate('Cart');
    };
    handleHomeClick = () => {
        this.props.navigation.navigate('ProductList');
    }
	render() {
        const BadgedIcon = withBadge(this.props.cartItemsCount)(Icon);
		return (
            <Header
                rightContainerStyle={styles.container}
                placement="left"
                leftComponent={{ icon: 'home', color: '#fff', onPress:this.handleHomeClick }}
                centerComponent={{ text: 'KHAREEDO', style: { color: '#fff' } }}
                rightComponent={<BadgedIcon name='shopping-cart' style={{color: '#FFF'}} onPress={() => this.handleCartClick()} />}
            />
        );
	}
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 20
    }
});

const mapStateToProps = (state) => {
	return {cartItemsCount: state.cartReducers.productsCount};
};

export default connect(mapStateToProps)(AppHeader);
