import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  return (
    <input
      placeholder="Cortar cebolla"
      value={searchValue}
      className="TodoSearch" onChange={(event) => {
        setSearchValue(event.target.value);
      }} />
  );
}
  
export { TodoSearch };