import './App.css';
import HeaderNav from './components/HeaderNav';
import VideoSection from './components/VideoSection';
import NextVideos from './components/NextVideos';
import { useState } from 'react';



function App() {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
    );
  
  return (
    <>
      <HeaderNav />
      <VideoSection videoId={videoId}/>
      <NextVideos videoId={videoId} setVideoId={setVideoId}/>
    </>
  );
}

export default App;
