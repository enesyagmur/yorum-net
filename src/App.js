
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Login/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='newcomment' element={<NewComment/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
