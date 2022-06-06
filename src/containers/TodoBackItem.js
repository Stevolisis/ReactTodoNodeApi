import {React} from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function TodoBackItem({todo,deletetodo,completetodo,stageedittodo}){

    return(
        <>
<div className='todo' style={{display:todo.filtered}}>


<div className='todosub1'
style={{
    background:todo.complete ? 'gray' : '#001b29' ,
    color:todo.complete ? 'lightGray' : '#fafafa',
    textDecoration:todo.complete ? 'line-through' : 'none'
    }}>

<div className='value'>
    <input type='checkbox' required='required' checked={todo.complete ? true : false}
     onChange={()=>completetodo(todo.id,todo.complete)}/>
    <p>{todo.name}</p>
</div>

<div className='icons'>
<i className='fa fa-edit' onClick={()=>stageedittodo(todo.id,todo.name)}></i>
<i className='fa fa-trash' onClick={()=>deletetodo(todo.id)}></i>
</div>
</div>
</div>
        </>
    )
}