import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import VisualizarPage from './pages/visualizar';
import Template from './pages/template';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/visualizar/:id" element={<VisualizarPage/>} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;

