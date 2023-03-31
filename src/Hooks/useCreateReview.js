import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-native";

import { CREATE_REVIEW } from '../graphql/mutation';

const useCreateReview = () => {
  const navigate = useNavigate()
  const [createReview, result] = useMutation(CREATE_REVIEW,{
    onError: (error) => {
        const errorCode = error.graphQLErrors[0].message
        console.log(errorCode)
    }
});
    
const addReview = async (values) => {
  // call the mutate function here with the right arguments
  const { data } = await createReview({ 
    variables: { review:{
      ownerName: values.Repository_owner_name,
      rating: +values.Rating,
      repositoryName: values.Repository_name,
      text:values.Review
    }}
 })
 if (data?.createReview) {
  navigate(`/${data.createReview.repositoryId}`)
 }
};

return [addReview, result];
};


export default useCreateReview