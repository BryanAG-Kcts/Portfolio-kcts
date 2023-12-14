import ReactDOM from 'react-dom/client'
import { LanguageContext } from './scripts/context/languages.context'
import { Portfolio } from './components/portfolio'
import './index.css'
import './colors.css'
import './darkMode.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Curriculum } from './components/curriculum/curriculum'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LanguageContext>
    <BrowserRouter>
      <Routes>
        <Route
          path='/' element={
            <Portfolio />
      }
        />
        <Route path='/cv' element={<Curriculum />} />
      </Routes>
    </BrowserRouter>
  </LanguageContext>
)
