import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import HomeUsuario from './Pages/Dashboard/HomeUsuario';
import Desktop from '../src/Components/Desktop/Desktop';

function App() {

  return (
    <BrowserRouter>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<h1>Login</h1>}/>
        <Route path='/home-user/*' element={<HomeUsuario/>}/>
        <Route path='/Integrantes' element={<Desktop/>} />
        <Route path='*' element={<h2>Page not found</h2>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
