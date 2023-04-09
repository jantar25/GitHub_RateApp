import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useNavigate } from "react-router-native";

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../Hooks/useRepositories';


const RepositoryList = () => {
  const navigate = useNavigate()
  const [selectedFilter, setSelectedFilter] = useState("CREATED_AT");
  const [searchQuery, setSearchQuery] = useState('');
  const [value] = useDebounce(searchQuery, 500);

  const { repositories,fetchMore } = useRepositories(selectedFilter,value);

  const onEndReach = () => {
    fetchMore();
  };

  const callBack = (filter) => setSelectedFilter(filter)
  const onChangeSearch = (query) => setSearchQuery(query);

  // Get the nodes from the edges array


  return <RepositoryListContainer 
          repositories={repositories} 
          handleCallBack={callBack}
          onChangeSearch={onChangeSearch} 
          searchQuery={searchQuery}
          selectedFilter={selectedFilter}
          onEndReach={onEndReach}
          onRepositoryPress={(id)=>navigate(`/repositories/${id}`)}
          />
};

export default RepositoryList;