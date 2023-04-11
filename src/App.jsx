import Bulbasaur from './pages/bulbasaur'
import Charmander from './pages/charmander'
import Home from './pages/home/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Squirtle from './pages/squirtle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charmander" element={<Charmander />} />
        <Route path="/bulbasaur" element={<Bulbasaur />} />
        <Route path="/squirtle" element={<Squirtle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
