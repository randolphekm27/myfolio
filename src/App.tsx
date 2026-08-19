import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Diplomes from './pages/Diplomes'
import Projets from './pages/Projets'
import CVPage from './pages/CVPage'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diplomes" element={<Diplomes />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
