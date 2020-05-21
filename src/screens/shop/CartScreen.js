import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import CartItem from '../../components/CartItem';
import {removeItem} from '../../actions/CartAction';
const CartScreen = () => {
  const dispatch = useDispatch();
  const onRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const listItem = [];
    for (const key in state.cart.itemInCart) {
      listItem.push({
        productId: key,
        productTitle: state.cart.itemInCart[key].productTitle,
        quantity: state.cart.itemInCart[key].quantity,
        sum: state.cart.itemInCart[key].sum.toFixed(2),
      });
    }
    return listItem.sort((a, b) => (a.productId > b.productId ? 1 : -1));
  });
  return (
    <View style={styles.screenContainer}>
      <View style={styles.summary}>
        <Text style={styles.textTotal}>
          Total:{' '}
          <Text style={styles.amount}> ${cartTotalAmount.toFixed(2)}</Text>
        </Text>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={({item}) => (
          <CartItem
            quantity={item.quantity}
            title={item.productTitle}
            amount={item.sum}
            onRemoveItem={() => onRemoveItem(item.productId)}
          />
        )}
      />
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
