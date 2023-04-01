import { View, Pressable,StyleSheet } from 'react-native';
import { useNavigate } from "react-router-native";
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import { CREATE_USER } from '../graphql/mutation';
import useSignIn from '../Hooks/useSignIn';


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
  const [logIn] = useSignIn();
  const navigate = useNavigate();
  const [createUser] = useMutation(CREATE_USER,{
    onError: (error) => {
        const errorCode = error.graphQLErrors[0].message
        console.log(errorCode)
    }
  });
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
  const { username, password } = values;
  
  try {
    const { data } = await createUser({ 
      variables: { user:{username, password} }
    })
    if(data.createUser) {
      await logIn({ username, password });
      navigate("/", { replace: true })
    }
  } catch (error) {
    console.log(error);
  }

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