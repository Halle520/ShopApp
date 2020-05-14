import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import RequestAPIService from '../../services/';
import {connect} from 'react-redux';
import * as productAction from '../../actions/ProductAction';
import * as cartAction from '../../actions/CartAction';
import ProductItem from '../../components/ProductItem';

class ProductOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  handleListProduct = (list) => {
    this.props.prepareListProduct(list);
  };
  static navigationOptions = {
    title: 'All Products',
  };
  componentDidMount() {
    RequestAPIService.get('/product').then(
      (json) => {
        this.handleListProduct(json);
        this.setState({isLoading: false});
      },
      (reject) => console.log(`data is rejected ${reject}`),
    );
  }
  render() {
    const {navigation} = this.props;
    return this.state.isLoading ? (
      <ActivityIndicator />
    ) : (
      <FlatList
        data={this.props.availableProduct}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ProductItem
            image={item.imageUrl}
            title={item.title}
            price={item.price}
            onClickViewDetails={() => {
              navigation.navigate('ProductDetails', {
                productId: item.id,
                productTitle: item.title,
              });
            }}
            onClickAddToCard={() => {
              this.props.addToCart(item);
            }}
          />
        )}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  availableProduct: state.products.availableProduct,
});
const mapDispatchToProps = {
  ...cartAction,
  ...productAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverview);
