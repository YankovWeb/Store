import {FlatList} from 'react-native';
import {useCallback} from 'react';
import CartCard from './CartCard';
import CartListHeader from './CartListHeader';
import CartFooter from './CartFooter';
import {CartItem} from '../types';
import {useAppSelector} from '../store/store';
import {selectCartItems} from '../features/cart/cartSlice';

const CartList = () => {
  const keyExtractor = useCallback((item: CartItem) => item.id?.toString(), []);

  const items = useAppSelector(selectCartItems);

  const renderItem = useCallback(
    ({item}: {item: CartItem}) => <CartCard item={item} />,
    [items]
  );

  const totalPrice: number = items.reduce(
    (count: number, item: CartItem) => count + item.totalPrice,
    0
  );

  return (
    <FlatList
      data={items}
      ListHeaderComponent={<CartListHeader />}
      stickyHeaderIndices={[0]}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListFooterComponent={<CartFooter totalPrice={totalPrice} />}
    />
  );
};

export default CartList;
