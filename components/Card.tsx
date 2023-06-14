import {View, Text, Image, StyleSheet} from 'react-native';
import {Product} from '../types';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../features/cart/cartSlice';
import {memo} from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import Button from './Button';
import ProductRating from './ProductRating';

interface CardProps {
  item: Product;
}

const Card = ({item}: CardProps) => {
  const dispatch = useDispatch<Dispatch>();

  const navigation = useNavigation();

  const handleViewDetails = (item: Product) =>
    navigation.navigate('Details', {item});

  const handleAddToCart = (item: Product) => {
    dispatch(addItemToCart(item));
  };

  return (
    <View style={styles.productContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
      <Text style={styles.category}>Category: {item.category}</Text>

      <ProductRating
        rate={item.rating?.rate ?? 0}
        count={item.rating?.count ?? 0}
      />
      <View style={styles.buttonContainer}>
        <Button
          innerText="Add to Cart"
          style={styles.addButton}
          onPress={() => handleAddToCart(item)}
        />
        <Button
          innerText="View Details"
          style={styles.details}
          onPress={() => handleViewDetails(item)}
        />
      </View>
    </View>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    padding: 16,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    aspectRatio: 2,
    marginBottom: 8,
    borderRadius: 8,
  },
  price: {
    fontSize: 16,
    color: 'tomato',
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'green',
  },
  details: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'purple',
  },
});
