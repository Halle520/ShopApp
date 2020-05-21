import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CartItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemQuantity}>{props.quantity} </Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.itemAmount}>
        <Text style={styles.amount}>${props.amount}</Text>
        <TouchableOpacity style={styles.btnDelete} onPress={props.onRemoveItem}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemAmount: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  itemInfo: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  itemQuantity: {
    color: '#888',
    fontSize: 16,
  },
  title: {
    fontSize: 16,
  },
  btnDelete: {
    color: 'red',
    marginLeft: 20,
  },
});
