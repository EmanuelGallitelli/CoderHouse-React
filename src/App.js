import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Index } from './components/Index'
import { Mug } from './components/Mug'
import { Bowl } from './components/Bowl'
import { Info } from './components/Info'
import { PrincipalNav } from './components/PrincipalNav'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrincipalNav />}>
              <Route Index element={<Index />} />
              <Route path='Mug' element={<Mug />} />
              <Route path='Bowl' element={<Bowl />} />
              <Route path='Info' element={<Info />} />

              <Route path='*' element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
      <main>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
