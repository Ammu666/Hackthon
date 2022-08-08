import './App.css';
import View from './components/View';
import React, {useState, useEffect} from 'react';

  //getting the values of local storage
  const accessData=()=>{
    const data=localStorage.getItem('todo');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }
export const App=()=> {
  //main array of objects state || todo state || dolist array of objects
  const [todo, settodo]=useState(accessData());
  //input field 
  const [addtodo, setAddtodo] = useState('');
  const [id, setId] = useState('');
  //form submit event
  const handleAddTodoSubmit=(e)=>{
    e.preventDefault();

    //creating an object
    let dolist={
      addtodo,
      id
    }

    settodo([...todo,dolist]);
    //After submitting clear input fields
    setAddtodo('');
    setId('');
  }

  //delete todo from LS
  const deleteTodo=(id)=>{
    const filteredToDos=todo.filter((element,idex)=>{
      return element.id !== id
    })
    settodo(filteredToDos);
   
  }

  //Complete Task
  const completeTodo=(id)=>{
    const filteredToDos=todo.filter((element,idex)=>{
      return element.id !== id
    })
    alert("Task is Completed");
    settodo(filteredToDos);
    
  }



  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(todo));
  },[todo])

  return (
    <div className="toDoList">
      <h1>Order Of The Day</h1>
      <p>Subtracting from your list of priorities is as important as adding to it</p>
      <div className='form-container'>
          <form autoComplete="off" className='form-group' onSubmit={handleAddTodoSubmit}>
          <label>ID</label>
            <input type="text" className='form-control' required onChange={(e)=>setId(e.target.value)} value={id}></input>
            <br></br>
            <label>Add ToDo</label>
            <input type="text" className='form-control' required onChange={(e)=>setAddtodo(e.target.value)} value={addtodo}></input>
            <br></br>
           
            <button type="submit" className='btn btn-success btn-md'>ADD</button>

          </form>

      </div>
      <div className='view-container'>
        {todo.length>0 && 
        <>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>ToDo</th>
                  <th>Completed</th>
                  <th>Delete</th>

                </tr>
              </thead>
              <tbody>
                  <View todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}></View>
              </tbody>
            </table>
          </div>
          <button className='btn btn-danger btn-md'
            onClick={()=>settodo([])}>Remove All</button>
        </>}
        {todo.length < 1 && <div>Not added any To - Do - List yet</div>}
      </div>
    </div>
  );
}
export default App;
