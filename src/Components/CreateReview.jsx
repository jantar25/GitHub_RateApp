import { View } from "react-native"

import CreateReviewForm from "./CreateReviewForm"

const CreateReview = (values) => {
    const handleSubmit = () => {
        console.log(values)
    }
  return (
    <View>
        <CreateReviewForm onsubmit={handleSubmit} />
    </View>
  )
}

export default CreateReview