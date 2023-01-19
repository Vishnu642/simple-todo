

export const Form = ({input,setInput,todos,setTodos})=>{

   const onFormSubmit =(e)=>{
           e.preventDefault()
           setTodos([...todos,{id:Math.random(),title:input,completed:false}])
           setInput("")
   }

    return(
        <div>
            <form onSubmit={onFormSubmit} >
                <input type="text"
                 placeholder="Enter Todos"
                  value={input}
                  required
                  onChange={(e)=>setInput(e.target.value)} ></input>
                <button type="submit" >Add</button>
            </form>
        </div>
    )
}