import {StyleSheet, Text, View} from 'react-native';

type StringObject = {
  [key: string]: string;
};

const DateDisplay = () => {
  const currentDate: Date = new Date();
  const options: StringObject = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formatDate: string = currentDate.toLocaleDateString('en-Us', options);
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.homeText}>Welcome</Text>
      <Text style={styles.date}>{formatDate}</Text>
    </View>
  );
};

export default DateDisplay;
const styles = StyleSheet.create({
  containerHeader: {
    flex: 0.2,
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },
  homeText: {
    marginTop: 50,
    paddingLeft: 30,
    fontSize: 20,
    fontWeight: '600',
  },
  date: {
    padding: 5,
    paddingLeft: 30,
    marginTop: 2,
    fontSize: 12,
    fontWeight: '200',
  },
});
