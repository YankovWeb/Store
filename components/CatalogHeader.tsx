import {useState} from 'react';
import {SafeAreaView, StyleSheet, Pressable} from 'react-native';
import SearchInput from './SearchInput';
import Icon from './Icon';

interface HeaderProps {
  value: string;
  onTextChangeHandler: (arg: string) => void;
}

const Haeder = ({value, onTextChangeHandler}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <SafeAreaView style={styles.headerContainer}>
      {isOpen && (
        <SearchInput
          isOpen={isOpen}
          value={value}
          onTextChangeHandler={onTextChangeHandler}
        />
      )}
      <Pressable onPress={toggleIsOpen}>
        <Icon size={30} name={isOpen ? 'ios-close-circle' : 'ios-search'} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Haeder;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 35,
    backgroundColor: '#ebebeb',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  icon: {
    padding: 5,
    flex: 0.2,
  },
});
