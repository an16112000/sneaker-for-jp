import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LayOutDetailSneaker from './LayOutDefault/LayOutDetailSneaker/LayOutDetailSneaker';
import LayOutMenuSneaker from './LayOutDefault/LayOutMenuSneaker/LayOutMenuSneaker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/menusneaker' element={<LayOutMenuSneaker />} />
        <Route path='/detailsneaker' element={<LayOutDetailSneaker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;