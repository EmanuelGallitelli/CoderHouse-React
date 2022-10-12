import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {Index} from './components/Index'
import {Console} from './components/Console'
import {Games} from './components/Games'
import {Info} from './components/Info'
import {PrincipalNav} from './layouts/PrincipalNav'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrincipalNav />}>
            <Route Index element={<Index />} />
            <Route path='Console' element={<Console />} />
            <Route path='Games' element={<Games />} />
            <Route path='Info' element={<Info />} />

            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
