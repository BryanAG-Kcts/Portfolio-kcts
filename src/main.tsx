import ReactDOM from 'react-dom/client'
import { LanguageContext } from './scripts/context/languages.context'
import { Portfolio } from './components/portfolio'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Curriculum } from './components/curriculum/curriculum'
import { Page404 } from './404 page/page404'
import { Certificate } from './components/certificate/certificate'
import { GalleryCertificates } from './components/certificate/galleryCertificates'
import { FollowBall } from './followBall/followBall'

import './index.css'
import './styles/colors.css'
import './styles/darkMode.css'
import './styles/pulseHover.css'
import './styles/scroll.css'
import './styles/utilities.css'
import { HelmetProvider } from 'react-helmet-async'
import { TitleWindow } from './scripts/helpers/titleWindow/titleWindow'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <>
    <FollowBall />
    <TitleWindow />

    <HelmetProvider>
      <LanguageContext>
        <Router>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/certificate/langs/:lang' element={<GalleryCertificates />} />
            <Route path='/cv' element={<Curriculum />} />
            <Route path='/certificate/:certificate' element={<Certificate />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Router>
      </LanguageContext>
    </HelmetProvider>

  </>
)
