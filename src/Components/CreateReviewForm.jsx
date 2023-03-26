import { View, Pressable,StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const CreateReviewForm = ({onSubmit}) => {
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

  const initialValues = {
      username: '',
      password: '',
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
            <Pressable onPress={handleSubmit}>
            <Text style={styles.button}>Create Review</Text>
            </Pressable>
        </View>
    )}
  </Formik>
  )
}

export default CreateReviewForm