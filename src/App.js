import './App.css';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/detail' element={<ProductDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
