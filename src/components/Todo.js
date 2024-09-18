import React from 'react';
import Input from './Input';

const Todo =()=>{
 const[inputValue, setInputValue] = React.useState({});
 const[todoList, setTodoList]= React.useState([])

 function onChnageHandler(event){
    setInputValue({[event.target.name]:event.target.value})
 }

 function addHandler(){
    setTodoList([
        ...todoList,
        {
            todo:inputValue.todo,
            id:Math.random(),
            edit:false
        }
    ])
    setInputValue({ 
        todo:''
    })
 }

 function handleDelete(id){
    const data=todoList.filter(item=>item.id !==id)
    setTodoList(data)
 }

 function editHandler(id){
   const editedTodo=todoList.map((item)=>{
           return(
            item.id===id ? {...item,edit:true} : item
           )
   }) 
   setTodoList(editedTodo)
 }

 function handleSave(id){
const saveEditedTodo = todoList.map((item)=>{
    if(item.id === id ){
        return {...item, todo:inputValue.todo, edit:false} 
    }
     return item
})
setTodoList(saveEditedTodo)
 };

function handleCancle(id){
    const cancleEdit = todoList.map((item)=>{
        return item.id===id ? {...item, edit:false} : item
    })
    setTodoList(cancleEdit)
}


// console.log('inputValue===',inputValue)
// console.log('todoList===',todoList)


    return(
        <>
           <h1>Type here</h1>
            <div>
           {/* <input onChange={onChnageHandler} name='todo' value={inputValue.todo}/> */}
           <Input onChange={onChnageHandler} name='todo' value={inputValue.todo}/>
           <button onClick={addHandler}>Add</button>
            </div>
          
            {
                todoList.map((todos)=>{
                    return(
                        <>
                       
                        <div key={todos.id} >
                            {todos.edit===true ? (
                                <div>
                                <input
                                 defaultValue={todos.todo} 
                                 onChange={onChnageHandler} 
                                 name='todo' 
                                 value={inputValue.todo} />
                                <button onClick={()=>handleSave(todos.id)}>Save</button>
                                <button onClick={()=>handleCancle(todos.id)}>Cancel</button>
                                </div>
                            ) : (
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'center',margin:'10px 0' }}>
                                    <p>{todos.todo}</p>
                                    <button onClick={()=>editHandler(todos.id)}>Edit</button>
                                    <button onClick={()=>handleDelete(todos.id)}>Delete</button>
                                    
                            </div>
                        )
                            }
                            </div>
                            
                            {/* {!todos.edit && (
                                <div>
                                    <button onClick={()=>editHandler(todos.id)}>Edit</button>
                                    <button onClick={()=>handleDelete(todos.id)}>Delete</button>
                                    </div>
                            )} */}
                           
                           </>
                       
                    )
                })
            }
           
        </>
    )
}

export default Todo;