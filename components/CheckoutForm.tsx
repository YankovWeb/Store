import {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {clearCart} from '../features/cart/cartSlice';
import Button from './Button';
import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {KeyboardAvoidingView} from 'react-native';

interface CheckoutFormProps {
  modalVisible: boolean;
  closeModal: (arg: boolean) => void;
}

const CheckoutForm = ({modalVisible, closeModal}: CheckoutFormProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const navigation =
    useNavigation<NavigationProp<ReactNavigation.RootParamList>>();

  const handleCheckout = () => {
    if (!name || !email.includes('@') || !address) {
      Alert.alert('Try again', 'Please fill all fields and provide an email.');
    } else {
      Alert.alert(
        'Great! Your products are on their way.',
        'Thank you for shopping with us!'
      );
      dispatch(clearCart());
      setName('');
      setEmail('');
      setAddress('');
      navigation.navigate('Catalog');
      closeModal(false);
    }
  };
  const handleCloseModal = () => closeModal(false);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.contentContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Address"
                  value={address}
                  onChangeText={setAddress}
                />
                <View style={styles.buttonContainer}>
                  <Button
                    innerText="Checkout"
                    onPress={handleCheckout}
                    style={styles.checkoutButton}
                  />
                  <Button
                    innerText="Close"
                    onPress={handleCloseModal}
                    style={styles.closeButton}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  buttonContainer: {
    display: 'flex',
    rowGap: 14,
    marginVertical: 11,
  },
  closeButton: {
    backgroundColor: 'tomato',
    paddingVertical: 4,
    borderRadius: 6,
  },
  checkoutButton: {
    backgroundColor: 'green',
    paddingVertical: 6,
    borderRadius: 6,
  },
});

export default CheckoutForm;
