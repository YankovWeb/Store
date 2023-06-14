import {View, Text, StyleSheet, Alert} from 'react-native';
import Button from './Button';

import {useState} from 'react';
import CheckoutForm from './CheckoutForm';

interface CardFooterProps {
  totalPrice: number;
}

const CartFooter = ({totalPrice}: CardFooterProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const emptyCardMessage =
    "Your cart is empty.\nWhen you add products, they'll\napper here.";
  const totalPriceMessage = `Total: $${totalPrice?.toFixed(2)}`;

  const handleShowForm = () =>
    totalPrice > 1
      ? setModalVisible(true)
      : Alert.alert('Your cart is empty', 'Please fill your cart to checkout');

  return (
    <>
      <CheckoutForm modalVisible={modalVisible} closeModal={setModalVisible} />
      <View style={styles.container}>
        <Text style={styles.total}>
          {totalPrice ? totalPriceMessage : emptyCardMessage}
        </Text>
        <Button
          style={styles.button}
          innerText="Checkout"
          onPress={handleShowForm}
        />
      </View>
    </>
  );
};

export default CartFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'flex-end',
    gap: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'black',
    marginBottom: 40,
  },
});
