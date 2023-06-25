
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import NewComment from './pages/NewComment';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='newcomment' element={<NewComment/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
