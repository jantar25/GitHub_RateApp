import { View } from "react-native"

import CreateReviewForm from "./CreateReviewForm"

const CreateReview = () => {
    const handleSubmit = () => {
        console.log('Review submitted')
    }
  return (
    <View>
        <CreateReviewForm onsubmit={handleSubmit} />
    </View>
  )
}

export default CreateReview