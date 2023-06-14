import {RouteProp, useRoute} from '@react-navigation/native';
import {Text, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {StackParamList} from '../navigations/StackNavigation';
import ProductRating from './ProductRating';

const CardDetailView = () => {
  const route = useRoute<RouteProp<StackParamList, 'Details'>>();

  const {image, title, category, price, description, rating} =
    route.params.item;

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>Category: {category}</Text>
        <Text style={styles.price}>Price: ${price.toFixed(2)}</Text>
        <Text>Description:</Text>
        <Text style={styles.description}>{description}</Text>
        <ProductRating rate={rating?.rate ?? 0} count={rating?.count ?? 0} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default CardDetailView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 4,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  image: {
    aspectRatio: 0.9,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: 'red',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
});
