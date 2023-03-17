import { useContext } from 'react'; 
import AuthStorageContext from '../Contexts/AuthStorageContext'


const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;