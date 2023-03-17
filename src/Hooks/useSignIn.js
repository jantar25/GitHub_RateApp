import { useMutation,useApolloClient } from '@apollo/client';

import { LOGIN } from '../graphql/mutation';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient();

    const [authenticate, result] = useMutation(LOGIN,{
        onError: (error) => {
            const errorCode = error.graphQLErrors[0].message
            console.log(errorCode)
        }
    });

    const logIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const { data } = await authenticate({ 
        variables: { credentials:{username, password} }
     })
     if (data?.authenticate) {
      await authStorage.setAccessToken(data.authenticate.accessToken)
      apolloClient.resetStore();
     }
    };
  
    return [logIn, result];
  };

export default useSignIn;