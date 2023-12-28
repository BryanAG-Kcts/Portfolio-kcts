import ReactDOM from 'react-dom/client'
import { LanguageContext } from './scripts/context/languages.context'
import { Portfolio } from './components/portfolio'
import './index.css'
import './colors.css'
import './darkMode.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Curriculum } from './components/curriculum/curriculum'
import { Page404 } from './404 page/page404'
import { Certificate } from './components/certificate/certificate'
import { GalleryCertificates } from './components/certificate/galleryCertificates'
import { FollowBall } from './followBall/followBall'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <>
    <FollowBall />

    <BrowserRouter>
      <Routes>
        <Route
          path='/' element={
            <LanguageContext>
              <Portfolio />
            </LanguageContext>
          }
        />
        <Route path='/cv' element={<Curriculum />} />

        <Route path='/certificate/:certificate' element={<Certificate />} />
        <Route path='/certificate/langs/:lang' element={<GalleryCertificates />} />

        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>

  </>
)
