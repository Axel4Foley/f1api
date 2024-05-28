import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Features/Home/Home'
import { Season } from './Features/Season/Season';
import { SeasonId } from './Features/SeasonId/SeasonId';
import { Race } from './Features/Races/Race';
import { Years } from './Features/Years/Years';
import { Year } from './Features/Years/Year';
import { Driver } from './Features/Driver/Driver';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path='years'>
            <Route path='' element={<Years/>}></Route>
            <Route path=':yearId'>
              <Route path='' element={<Year/>}></Route>
              <Route path='driver/:driverId' element={<Driver/>}></Route>

              
            </Route>
          </Route>

          <Route path="season" >
            <Route path='' element={<Season/>}></Route>
            <Route path=':seasonId'>
              <Route path='' element={<SeasonId/>}></Route>
              <Route path="races/:raceId" element={<Race/>}></Route>
            </Route>
              {/* <Route path="race/:raceid" element={<RaceId/>}></Route>
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
