
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Chartpage } from './pages/Chartpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/chats' element={<Chartpage />} />
      </Routes>
    </div>
  );
}

export default App;
