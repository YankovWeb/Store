import {Text, StyleSheet} from 'react-native';
import Icon from './Icon';

interface ProductRatingProps {
  count: number;
  rate: number;
}

const ProductRating = ({count, rate}: ProductRatingProps) => (
  <Text style={styles.rating}>
    <Text>Rating: </Text>
    <Icon name="star" size={16} color={count ? 'gold' : '#888'} />
    <Text>{rate}</Text>
    <Text> ({count})</Text>
    <Text> reviews</Text>
  </Text>
);

export default ProductRating;

const styles = StyleSheet.create({
  rating: {
    fontSize: 14,
    color: '#888',
    lineHeight: 20,
  },
});
