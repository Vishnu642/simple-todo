

export const TodoList = ({todos,setTodos})=>{
    console.log(todos)
    return(
        <div>
        
           {todos.map((item)=>{
                
                     <div key={item.id} >
                        <h2>{item.title}</h2>
                     </div>
                 
           })}
        </div>
    )
}