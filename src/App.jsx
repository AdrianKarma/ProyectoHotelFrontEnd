import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Inicio from './components/pages/Inicio';
import Footer from './components/common/Footer';
import Error404 from './components/pages/Error404';
function App() {

  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route exact path='/' element={<Inicio/>}/>
    <Route path='*' element={<Error404/>}/>
   </Routes>
   <Footer></Footer>
   </BrowserRouter>

  )
}

export default App
