import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const CartScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.summary}>
        <Text style={styles.textTotal}>
          Total: <Text style={styles.amount}> ${cartTotalAmount}</Text>
        </Text>
      </View>
      <Text style={{margin: 20}}>CART ITEMS</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screenContainer: {
    margin: 20,
  },
  textTotal: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  amount: {
    color: '#aaafff',
  },
  summary: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },
});
