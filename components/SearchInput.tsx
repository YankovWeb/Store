import {View, TextInput, StyleSheet} from 'react-native';

interface SearchInputProps {
  isOpen: boolean;
  value: string;
  onTextChangeHandler: (arg: string) => void;
}

const SearchInput = ({
  isOpen = true,
  value,
  onTextChangeHandler,
}: SearchInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        autoFocus={isOpen}
        value={value}
        onChangeText={onTextChangeHandler}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0.7,
    fontSize: 16,
    marginLeft: 8,
  },
  input: {
    paddingVertical: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
