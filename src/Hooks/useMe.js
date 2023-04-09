import { useQuery } from '@apollo/client';

import { ME } from "../graphql/queries";

const useMe = (showReviews) => {
    if (showReviews) {
        const { data,refetch  } = useQuery(ME, {
            variables: { includeReviews: showReviews },
          })
          const userData = data?.me
          return { userData,refetch }
    } else {
        const { data,refetch } = useQuery(ME)
        const userData = data?.me
        return { userData,refetch }
    }

}

export default useMe