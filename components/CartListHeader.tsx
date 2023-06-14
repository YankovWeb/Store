import {SafeAreaView, Text, StyleSheet} from 'react-native';

const CartListHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cart</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    backgroundColor: '#ebebeb',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default CartListHeader;
