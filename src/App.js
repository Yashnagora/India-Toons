import { useState } from 'react';
import Navbar from './Components/Navbar'
import Animetop from './Components/Animetop'
import Animeitem from './Components/Animeitem'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Homepage from './Components/Homepage';
import Admin from './Components/Admin';
import Footer from './Components/Footer';
import Disclaimer from './Components/Disclaimer';

function App() {
  const [progress, setprogress] = useState(0)

  return (
<div>
  <BrowserRouter>
    <Navbar/>
    <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
    <Routes>
      <Route exact path='/' element = {<Homepage setprogress={setprogress}/>}/>
      <Route exact path='/popular' element = {<Animetop setprogress={setprogress}/>}/>
      <Route exact path='/anime/:id' element = {<Animeitem setprogress={setprogress}/>}/>
      <Route exact path='/dmca' element = {<Disclaimer/>}/>
      <Route exact path='/admin' element = {<Admin/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>


</div>
  );
}

export default App;
