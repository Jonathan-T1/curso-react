import React from 'react';
import './TodoFilter.css';

function TodoFilter({
    filterValue,
    setFilterValue,
}) {

  return (
    <>
    <input
      placeholder="Filter a To Do "
      className="TodoFilter"
      value={filterValue}
      onChange={(event) => {
        setFilterValue(event.target.value);
      }}
    />
    </>
  );
}

export { TodoFilter };