import {React,useEffect,useState} from 'react'
import axios from 'axios'
import TodoBackItem from './TodoBackItem';

export default function TodoBack(){
  const [todos,setTodos]=useState([]);
  const [name,setName]=useState("");
  const [editname,setEditname]=useState("");
  const [buttonstatus,setButtonstatus]=useState("Add");

  function fetchtodo(){
    axios.get('http://localhost:80/gettodos',{withCredentials:true})
    .then(res=>{   
        setTodos(res.data.data);
    }).catch(err=>{
         })
  }


  function handleSubmit(e){
    e.preventDefault();
    if(buttonstatus==="Add"){
      const todotoadd={
        id:Date.now(),
        name:name,
        complete:false,
        filtered:false,
        status:'none'
      }
        axios.post('http://localhost:80/addtodo',todotoadd,{withCredentials:true})
        .then(res=>{
          fetchtodo();
          setName("")
      
        }).catch(err=>{
          
        })
    }else{

      const todotoedit={
        id:editname,
        name:name
      }
        axios.post('http://localhost:80/edittodo',todotoedit,{withCredentials:true})
        .then(res=>{
          fetchtodo();
          setName("")
          setButtonstatus("Add")
      
        }).catch(err=>{
          
        })

    }

  }



  function deletetodo(item){
      axios.post('http://localhost:80/deletetodo',{id:item},{withCredentials:true})
      .then(res=>{

       if(res.data.data==='Successful'){
        fetchtodo();
       }else{
     alert("Error")
       }
    
      }).catch(err=>{
        
      })
    }


  function completetodo(item,status){
    axios.post('http://localhost:80/completetodo',{id:item,complete:!status},{withCredentials:true})
    .then(res=>{
     if(res.data.data==='Successful'){
      fetchtodo();
     }else{
   alert("Error")
     }
  
    }).catch(err=>{
      
    })
  }


  function completedtodo(){
    axios.get('http://localhost:80/completedtodo',{withCredentials:true})
    .then(res=>{
      if(res.data.data==='Successful'){
        fetchtodo();
      }else{
        alert("Error Occured")
      }
      // setTodos(res.data.data)
      //fetchtodo();

  
    }).catch(err=>{
      
    })
  }


  function activetodo(){
    axios.get('http://localhost:80/activetodo',{withCredentials:true})
    .then(res=>{
      if(res.data.data==='Successful'){
        fetchtodo();
      }else{
        alert("Error Occured")
      }
      // setTodos(res.data.data)
      //fetchtodo();

  
    }).catch(err=>{
      
    })
  }

  function alltodo(){
    axios.get('http://localhost:80/alltodo',{withCredentials:true})
    .then(res=>{
      if(res.data.data==='Successful'){
        fetchtodo();
      }else{
        alert("Error Occured")
      }
      // setTodos(res.data.data)
      //fetchtodo();

  
    }).catch(err=>{
      
    })
  }

  function stageedittodo(itemid,itemname){
setName(itemname);
setEditname(itemid)
setButtonstatus("Edit")
  }

  useEffect(()=>{
    fetchtodo();
  },[])













    return(
<>
<div className='holder'>
<header>
<h1>Todo List</h1>
</header>
<main>
<div className='infos'>
    <div className='card'>
    <div>
        <h2>{todos.length}</h2>
    </div>
    <div>
        <p>Total</p>
    </div>
    </div>

    <div className='card'>
    <div>
    <h2>{(todos.filter(n=>n.complete===false)).length}</h2>
    </div>
    <div>
    <p>Active</p>
    </div>
    </div>

    <div className='card'>
    <div>
        <h2>{(todos.filter(n=>n.complete===true)).length}</h2>
    </div>
    <div>
    <p>Completed</p>
    </div>

    </div>
</div>

<div className='todoses' >
{todos.map((todo=>{
return <TodoBackItem todo={todo} key={todo.id} deletetodo={deletetodo} 
completetodo={completetodo} stageedittodo={stageedittodo}/>
}))}
</div>



<div className='inputs'>

    <div className='filters'>
    <button onClick={()=>alltodo()}>All</button>
    <button onClick={()=>completedtodo()}>Completed</button>
    <button onClick={()=>activetodo()}>Active</button>
    </div>

    <div  className='todoadd'>
    <form onSubmit={handleSubmit}>
        <input required='required' type='text' placeholder='Add todo'
         value={name} onChange={e=> setName(e.target.value)}/>
        <button>{buttonstatus}</button>
    </form>
    </div>
    <div className='credit'>
     <p>Coded by Steven Joseph</p>
     <p>Linkedin: <a href='https://www.linkedin.com/in/steven-joseph-6871a2237'>https://www.linkedin.com/in/steven-joseph-6871a2237</a></p>
    </div>

</div>
</main>
</div>
</>
    )
}