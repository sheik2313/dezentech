import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import First from './components/First';
import Cardpage from './components/Cardpage';
import Secondpage from './components/Secondpage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/navbar" element={<Navbar/>} />
      <Route path='/first' element={<First/>}/>
      <Route path='/cardpage' element={<Cardpage/>}/>
      <Route path='/' element={<Secondpage/>}/>
      <Route path='/footer' element={<Footer/>}/>
     
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
