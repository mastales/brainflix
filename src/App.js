import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import UploadPage from './components/UploadPage';
import Home from './components/Home';

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "e9ed2c9d-3bf5-4466-9379-cacefeb2f279";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='' >
          <HeaderNav/>
          <Routes>
            <Route path={'/'} element={<Home api={API_URL} apiKey={API_KEY}/>} />
            <Route path={'/upload'} element={<UploadPage api={API_URL} apiKey={API_KEY}/>} />
            <Route path={'videos/:videoId'} element={<Home api={API_URL}/>} apiKey={API_KEY}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
