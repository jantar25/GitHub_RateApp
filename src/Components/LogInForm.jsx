import { View, Pressable,StyleSheet } from 'react-native';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const LogInForm = ({onSubmit}) => {
    const styles = StyleSheet.create({
      form: {
        backgroundColor:'#fff',
        padding:20
      },
      button: {
        marginTop:10,
        paddingVertical:10,
        textAlign:'center',
        backgroundColor:theme.colors.primary,
        color:'#fff',
        borderRadius:5
      },
    });
  
    return (
      <View style={styles.form}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <Pressable onPress={onSubmit}>
          <Text style={styles.button}>Sign In</Text>
        </Pressable>
      </View>
    )
  }

export default LogInForm