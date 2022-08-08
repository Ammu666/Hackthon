## To-Do List
### getting the values of local storage
const accessData=()=>{
    const data=localStorage.getItem('todo');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }



### main array of objects state || todo state || dolist array of objects
  

