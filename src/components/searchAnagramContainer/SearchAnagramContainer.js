import React from 'react';
import Search from './search/Search';
import AnagramList from './anagramList/AnagramsList';
import FavList from '../favList/FavList';

const SearchAnagramContainer = () => (
  <>
    <Search /> 
    <AnagramList /> 
    <FavList />
  </>
);

export default SearchAnagramContainer;
