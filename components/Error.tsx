import {View, Text, StyleSheet} from 'react-native';

interface ErrorProps {
  errorStatus: string;
  errorMessage: string;
}

const Error = ({errorStatus, errorMessage}: ErrorProps) => (
  <View style={style.errorContainer}>
    <Text>{errorStatus}</Text>
    <Text>{errorMessage}</Text>
  </View>
);

export default Error;

const style = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
});
