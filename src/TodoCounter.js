import React from 'react';
import './TodoCounter.css';

function TodoCounter({total,completed}){
    return(
      
      <div className="TodoCounter-container">
            <h2 className="TodoCounter">{total === completed && total !== 0 ? `👍🤩👍` : total === 0 ? '' : `Has completado`}</h2>
            <h2 className='TodoCounter' > {total === completed && total !== 0 ? `¡To Do's completados!` : total === 0 ? '👋 ¡Hola! 👋' : `${completed} de ${total} TODOs`} </h2>
      </div>
      
    );
}

export {TodoCounter};