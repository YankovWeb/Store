import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';

import DateDisplay from '../components/DateDisplay';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DateDisplay />
      <ImageBackground
        source={require('../assets/homePage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
