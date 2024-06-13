import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  {text : 'Cortar cebolla', completed:false},
  {text : 'tomar cerveza', completed:true},
  {text : 'ir al medico', completed:false},
  {text : 'jugar brawl', completed:true},
  {text : 'jugar clash', completed:false},
];

function App() {
  return (
    /*React.Fragment. 
    Te permite agrupar elementos sin agregar nodos adicionales al árbol DOM resultante. 
    Esto es especialmente útil cuando trabajas con listas o componentes 
    que necesitan devolver varios elementos sin un contenedor adicional.*/ 
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>

      <TodoFilter />

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} />
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
