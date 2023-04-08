import { useQuery } from '@apollo/client';

import { ME } from "../graphql/queries";

const useMe = (showReviews) => {
    if (showReviews) {
        const { data } = useQuery(ME, {
            variables: { includeReviews: showReviews },
          })
          return data?.me
    } else {
        const { data } = useQuery(ME)
        return data?.me
    }

}

export default useMe