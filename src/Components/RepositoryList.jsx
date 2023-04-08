import { useState } from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../Hooks/useRepositories';


const RepositoryList = () => {
  const [selectedFilter, setSelectedFilter] = useState("CREATED_AT");
  const [searchQuery, setSearchQuery] = useState('');

  const { repositories } = useRepositories(selectedFilter);

  console.log(searchQuery)
  const callBack = (filter) => setSelectedFilter(filter)
  const onChangeSearch = (query) => setSearchQuery(query);

  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  return <RepositoryListContainer 
          repositories={repositoryNodes} 
          handleCallBack={callBack}
          onChangeSearch={onChangeSearch} 
          searchQuery={searchQuery}
          selectedFilter={selectedFilter}
          />
};

export default RepositoryList;