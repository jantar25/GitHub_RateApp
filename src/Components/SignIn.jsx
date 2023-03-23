import { useNavigate } from "react-router-native";

import useSignIn from '../Hooks/useSignIn';
import LogInForm from "./LogInForm";

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

  return <LogInForm onSubmit={onSubmit} />
};

export default SignIn;