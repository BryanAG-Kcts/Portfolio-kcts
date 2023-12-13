import ReactDOM from 'react-dom/client'
import { LanguageContext } from './scripts/context/languages.context'
import { Portfolio } from './components/portfolio'
import './index.css'
import './colors.css'
import './darkMode.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LanguageContext>
    <Portfolio />
  </LanguageContext>
)
