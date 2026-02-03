import { BrowserRouter, Link, useLocation, Route, Routes } from 'react-router'
import { Map } from './pages/Map'
import { Page } from './components/Page'
import { Buildings } from './pages/Buildings'
import { Deaths } from './pages/Deaths'
import { Injuries } from './pages/Injuries'
import { Hunger } from './pages/Hunger'
import { HomeScreen } from './pages/HomeScreen'
import { AnimatePresence } from 'motion/react'
import { ScreenFilter } from './components/ScreenFilter'
import { Sounds } from './components/Sounds'
import "./styles/style.scss"
import "./App.scss"

export function App() {
  return (
    <>
      <Sounds/>
      <Map/>
      {/* <div className='animationWall'>Loading</div> */}
      <RouterComponent/>
      <ScreenFilter/>
    </>
  )
}

function RouterComponent() {
  const location = useLocation();
  return (
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="map" element={<></>}/>
            <Route path="homes" element={<Page><Buildings/></Page>}/>
            <Route path="deaths" element={<Page><Deaths/></Page>}/>
            <Route path="injuries" element={<Page><Injuries/></Page>}/>
            <Route path="hunger" element={<Page><Hunger/></Page>}/>
          </Routes>
        </AnimatePresence>
  );
}
