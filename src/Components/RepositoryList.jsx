import useRepositories from '../Hooks/useRepositories';


import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories } = useRepositories();


  return <RepositoryListContainer repositories={repositories}/>
};

export default RepositoryList;