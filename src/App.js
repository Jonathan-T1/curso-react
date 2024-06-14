import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import TodoItem from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  {text : 'Cortar cebolla', completed:true},
  {text : 'tomar cerveza', completed:true},
  {text : 'ir al medico', completed:false},
  {text : 'jugar brawl', completed:true},
  {text : 'jugar clash', completed:false},
];

function App() {
  const [toDos, setToDos] = React.useState(defaultTodos);
  const [filterValue, setFilterValue] = React.useState('');


  let completedToDos = toDos.filter(todo => !!todo.completed).length;
  
  var totalTodos = toDos.length;

  let buscador = toDos.filter(
    (todo) => {
      const toDosText = todo.text.toLowerCase();
      const filtertext = filterValue.toLowerCase();

      return toDosText.includes(filtertext);

    }
    
  );
  const completeToDos = (text) =>{
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    if( newTodos[todoIndex].completed == false ){
    newTodos[todoIndex].completed= true;
    setToDos(newTodos);
    }
    else if (newTodos[todoIndex].completed == true) {
    newTodos[todoIndex].completed= false;
    setToDos(newTodos);
    }
    else{
      console.log('opcion no habilitada')
    }
  }
  const deleteToDos = (text) =>{
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1);
    setToDos(newTodos);
  }
  return (
    /*React.Fragment. 
    Te permite agrupar elementos sin agregar nodos adicionales al árbol DOM resultante. 
    Esto es especialmente útil cuando trabajas con listas o componentes 
    que necesitan devolver varios elementos sin un contenedor adicional.*/ 
    <React.Fragment>
      <TodoCounter 
      completed={completedToDos} 
      total={totalTodos}
      />

      <TodoFilter 
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />

      <TodoList>
        {buscador.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeToDos (todo.text)}
          onDelete={() => deleteToDos (todo.text)}
          />
        ))}
      </TodoList>

    <CreateTodoButton />
    </React.Fragment>
 
  );
}
/*en esta parte se hace un array dentro de otro array con la propiedad .map
 ademas se declara la key que este caso es text ademas de enviar el texto y el completed 
 a el componente TodoItem*/



export default App;
