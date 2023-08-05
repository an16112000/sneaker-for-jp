import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayOutDetailSneaker from './LayOutDefault/LayOutDetailSneaker/LayOutDetailSneaker';
import LayOutMenuSneaker from './LayOutDefault/LayOutMenuSneaker/LayOutMenuSneaker';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/:typeOfProduct/page/:pageNumber' element={<LayOutMenuSneaker />} />
        <Route path='/product/:sneakerId' element={<LayOutDetailSneaker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
