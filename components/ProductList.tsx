import {FlatList} from 'react-native';
import {Product} from '../types';
import Header from './CatalogHeader';
import Card from './Card';
import {useCallback} from 'react';

interface Props {
  products: Product[];
  value: string;
  onTextChangeHandler: (arg: string) => void;
}

const ProductList = ({products, value, onTextChangeHandler}: Props) => {
  const keyExtractor = useCallback((item: Product) => item.id.toString(), []);

  const renderItem = useCallback(
    ({item}: {item: Product}) => <Card item={item} />,
    [products]
  );

  return (
    <FlatList
      data={products}
      ListHeaderComponent={
        <Header value={value} onTextChangeHandler={onTextChangeHandler} />
      }
      stickyHeaderIndices={[0]}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      initialNumToRender={2}
    />
  );
};

export default ProductList;
