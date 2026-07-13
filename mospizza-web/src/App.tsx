import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.tsx'
import PageLayout from './components/layout/PageLayout.tsx'
import QuickActionsBar from './components/layout/QuickActionsBar.tsx'
import HomePage from './pages/HomePage.tsx'
import MenuPage from './pages/MenuPage.tsx'
import OrderRedirect from './pages/OrderRedirect.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="app-shell">
        <QuickActionsBar />
        <Navbar />
        <PageLayout>
          <main className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/order" element={<OrderRedirect />} />
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
