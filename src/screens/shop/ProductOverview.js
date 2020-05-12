import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import RequestAPIService from '../../services/';
import {connect} from 'react-redux';
import * as productAction from '../../actions/ProductAction';

class ProductOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: [],
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
    return this.state.isLoading ? (
      <ActivityIndicator />
    ) : (
      <View style={{flex: 1}}>
        <Text>Product Overview</Text>
        <FlatList
          data={this.props.availableProduct}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Text>{item.description}</Text>}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  availableProduct: state.products.availableProduct,
});

export default connect(mapStateToProps, productAction)(ProductOverview);
