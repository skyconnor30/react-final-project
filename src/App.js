import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar';
import Home from './Element/Home';
import Bisection from './RootofEquation/Bisection';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Bisection' element={<Bisection/>} />
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
