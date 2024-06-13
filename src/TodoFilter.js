import React, { useState } from 'react';
import './TodoFilter.css';

function TodoFilter(){
  const [filterValue, setFilterValue] = React.useState();
  useState('');

  console.log('Los Usuarios buscan to do de '+ filterValue );

    return(
      <input className="TodoFilter" 
      placeholder="Buscar To Do"
      value={filterValue}
      onChange={(event)=>{
        setFilterValue(event.target.value);
      }}
      />
    );
}

export {TodoFilter};