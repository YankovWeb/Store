import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItemToCart, removeItemFromCart} from '../features/cart/cartSlice';
import Button from './Button';
import {CartItem} from '../types';
import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {memo} from 'react';

interface CartCardProps {
  item: CartItem;
}

const CartCard = ({item}: CartCardProps) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const addItemToCartHandler = () => dispatch(addItemToCart(item));

  const removeItemFromCartHandler = () => dispatch(removeItemFromCart(item.id));

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>Price: ${item.price.toFixed(2)}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.itemTotalPrice}>
          Total: ${item.totalPrice?.toFixed(2)}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.addButton}
          innerText="+"
          onPress={addItemToCartHandler}
        />
        <Button
          style={styles.removeButton}
          innerText="-"
          onPress={removeItemFromCartHandler}
        />
      </View>
    </View>
  );
};

export default memo(CartCard);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
  },
  itemInfo: {
    flex: 1,
    marginRight: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 4,
  },
  itemTotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  addButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'green',
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
