import { View, Pressable,StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useCreateReview from '../Hooks/useCreateReview';

const validationSchema = yup.object().shape({
  Repository_owner_name: yup.string().required('Repository owner name is required'),
  Repository_name: yup.string().required('Repository name is required'),
  Rating: yup.number().required('Repository Rating is required')
  .min(0, 'Rate must be between 0 and 100.')
  .max(100, 'Rate must be between 0 and 100.')
});

const CreateReviewForm = () => {
  const [addReview] = useCreateReview();

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
    try {
      await addReview(values);
    } catch (e) {
      console.log(e);
    }

}

  const initialValues = {
    Repository_owner_name: '',
    Repository_name: '',
    Rating:0,
    Review:''
    };
  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit} 
    validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View style={styles.form}>
            <FormikTextInput name="Repository_owner_name" placeholder="Repository owner name" />
            <FormikTextInput name="Repository_name" placeholder="Repository name" />
            <FormikTextInput name="Rating" placeholder="Rating between 0 and 100" />
            <FormikTextInput name="Review" placeholder="Review" multiline />
            <Pressable onPress={handleSubmit}>
              <Text style={styles.button}>Create a review</Text>
            </Pressable>
        </View>
    )}
  </Formik>
  )
}

export default CreateReviewForm