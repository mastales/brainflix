import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import UploadPage from './components/UploadPage';
import Home from './components/Home';

// const API_URL = process.env.REACT_APP_API_URL
const API_URL ='http://localhost:8080'

console.log(`API URL: ${API_URL}`)
function App() {
  return (
    <>

      <BrowserRouter>
        <div className='' >
          <HeaderNav />
          <Routes>
            <Route path={'/'} element={<Home api={API_URL} />} />
            <Route path={'/upload'} element={<UploadPage api={API_URL} />} />
            <Route path={'videos/:videoId'} element={<Home api={API_URL} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
