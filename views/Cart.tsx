import {StyleSheet, SafeAreaView} from 'react-native';
import CartList from '../components/CartList';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CartList />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
});
