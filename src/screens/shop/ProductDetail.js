import React from 'react';
import {View, Text, ScrollView, Image, Button, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const ProductDetail = (props) => {
  const productId = props.route.params.productId;
  const productDetail = useSelector((state) =>
    state.products.availableProduct.find((product) => product.id === productId),
  );
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: productDetail.imageUrl}} />
      <View style={styles.wrapDetail}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
        <Text style={styles.price}>${productDetail.price}</Text>
        <Text style={styles.description}>{productDetail.description}</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  wrapDetail: {
    marginHorizontal: 20,
  },
  price: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: Colors.secondary,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});
export default ProductDetail;
