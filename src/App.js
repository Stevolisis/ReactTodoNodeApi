import {React} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TodoBack from './containers/TodoBack'
import './styles/todo.scss';
function App() {

  return (
 

<>


    <BrowserRouter>
      <Routes>  
      <Route path='/' element={<TodoBack />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>


    
    </>

  );
}

export default App;
