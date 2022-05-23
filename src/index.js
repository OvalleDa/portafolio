import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App'
import Aboutme from './pages/Aboutme';
import Jobs from './pages/Jobs';
import Error from './pages/Error404';
import Studies from './pages/Studies';
import Skills from './pages/Skills';
import Prueba from './pages/Prueba';
import Jobs1 from './pages/Jobs1';
import Jobs2 from './pages/Jobs2';
import Jobs3 from './pages/Jobs3';
import Jobs4 from './pages/Jobs4';
import Jobs5 from './pages/Jobs5';
import Jobs6 from './pages/Jobs6';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Prueba/>}></Route>
          <Route path='/about-me' element={<Aboutme/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/studies' element={<Studies/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='*' element = {<Error/>}></Route>
          <Route path='/Home' element ={<App/>}></Route>
          <Route path='/jobs/arcane' element ={<Jobs1/>}></Route>
          <Route path='/jobs/ghibli' element ={<Jobs2/>}></Route>
          <Route path='/jobs/coraje' element ={<Jobs3/>}></Route>
          <Route path='/jobs/huellitas' element ={<Jobs4/>}></Route>
          <Route path='/jobs/forja' element ={<Jobs5/>}></Route>
          <Route path='/jobs/animalandia' element ={<Jobs6/>}></Route>

      </Routes>
  </BrowserRouter>
);

