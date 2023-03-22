import { useNavigate } from "react-router-native";
import { Formik } from 'formik';
import * as yup from 'yup';

import LogInForm from "./LogInForm";
import useSignIn from '../Hooks/useSignIn';


const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const [logIn] = useSignIn();
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await logIn({ username, password });
      navigate("/", { replace: true })
    } catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit} 
      validationSchema={validationSchema}>
        {({ handleSubmit }) => <LogInForm onSubmit={handleSubmit} />}
    </Formik>

  );
};

export default SignIn;