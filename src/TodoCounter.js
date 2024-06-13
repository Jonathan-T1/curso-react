import './TodoCounter.css';

function TodoCounter({total,completed}){
    return(
      <h1 className='TodoCounter'>
        has completado {completed} de {total} TO DO'S
      </h1>
    );
}

export {TodoCounter};