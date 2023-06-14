import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  style: StyleProp<ViewStyle>;
  onPress: () => void;
  innerText: string;
}

const Button = ({style, onPress, innerText}: ButtonProps) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={styles.buttonText}>{innerText}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
