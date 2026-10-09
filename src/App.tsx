import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageProvider'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
