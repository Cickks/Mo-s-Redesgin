import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import Navbar from './components/layout/Navbar.tsx'
import PageLayout from './components/layout/PageLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import MenuPage from './pages/MenuPage.tsx'
import OrderPage from './pages/OrderPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <PageLayout>
          <main className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </PageLayout>
      </div>
    </BrowserRouter>
  )
}

export default App
