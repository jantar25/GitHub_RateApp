import { View, Pressable,StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';


const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required')
    .min(1, 'Username must be have 1 and 30 characters.')
    .max(30, 'Username must be have 1 and 30 characters.'),
    password: yup.string().required('Password is required')
    .min(5, 'Password must be have 5 and 50 characters.')
    .max(50, 'Password must be have 5 and 50 characters.'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null])
    .required('Confirm Password is required'),
  });

const SignUpForm = () => {
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

  const onSubmit = async (values) => {
    console.log(values)
  };

  const initialValues = {
      username: '',
      password: '',
      confirmPassword:''
    };

  return (
      <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit} 
      validationSchema={validationSchema}>
        {({ handleSubmit }) => (
          <View style={styles.form}>
              <FormikTextInput name="username" placeholder="Username" />
              <FormikTextInput name="password" placeholder="Password" secureTextEntry />
              <FormikTextInput name="confirmPassword" placeholder="Confirm Password" secureTextEntry />
              <Pressable onPress={handleSubmit}>
                <Text style={styles.button}>Sign Up</Text>
              </Pressable>
          </View>
      )}
    </Formik>
  )
}
export default SignUpForm