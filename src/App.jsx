import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Features/Home/Home'
import { Season } from './Features/Season/Season';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="season" >
            <Route path='' element={<Season/>}></Route>
            {/* <Route path=':seasonId'>
              <Route path='' element={<SeasonId/>}></Route>
              <Route path="race" element={<Race/>}></Route>
              <Route path="race/:raceid" element={<RaceId/>}></Route>
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
