import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../Hooks/useRepositories';


const RepositoryList = () => {
  const [selectedFilter, setSelectedFilter] = useState("CREATED_AT");
  const [searchQuery, setSearchQuery] = useState('');
  const [value] = useDebounce(searchQuery, 500);

  const { repositories } = useRepositories(selectedFilter,value);

  const callBack = (filter) => setSelectedFilter(filter)
  const onChangeSearch = (query) => setSearchQuery(query);

  // Get the nodes from the edges array
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