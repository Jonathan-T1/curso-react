import './CreateTodoButton.css'

function CreateTodoButton(){
    return(
      <div>
        <button 
        className="CreateTodoButton" 
        onClick={
          (event)=> {
          console.log('Le diste Click')
          console.log(event)
          console.log(event.target)}}>
           + 
        </button>
      </div>
    );
}

export {CreateTodoButton};