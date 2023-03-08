import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        marginVertical:10,
        padding:10,
        borderWidth: 1,
        borderColor: theme.colors.error,
        borderRadius:5
      }
});
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput 
            style={!error? textInputStyle : styles.input}
            {...props} />;
};

export default TextInput;