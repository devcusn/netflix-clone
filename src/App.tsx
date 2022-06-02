import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routers, { Router } from './Routers/Routers';
const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Routers.map((route: Router) => <Route path={route.path} element={route.component} key={Math.random()} />)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
