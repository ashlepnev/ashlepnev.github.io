import {React, useEffect} from 'react';
import {
  Navigate,
  Routes,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";
import './style/normalize.css';
import './style/main.css';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';

function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0,0);
  }

  return (
      <div className="container">
        <header className="header">
          <div className="header-container">
            <div className="header-photo">
              <img src='/images/andrey.jpg' title='eto ya :)'/>
            </div>
            <nav>
              <ul className="main-menu">
                <li>
                  <NavLink to="/">Резюме</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Порфтолио</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">Контакты</NavLink>
                </li>
              </ul>
            </nav>
            <a href="/CV_Shlepnev.pdf" target='_blank' className="btn btn-header download-pdf"><span>Резюме в PDF</span></a>
          </div>
        </header>

        <div className="main">
          <main>
            <Routes>
              <Route index path="/" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

          <footer className="footer">
            <div className="footer-block">
              &copy; Андрей Шлепнёв
            </div>
            <div className="footer-block text-right"><a href='#' onClick={() => scrollToTop()}>&uarr; Наверх</a></div>
          </footer>
          </main>
        
        </div>

    </div>
  );
}

export default App;
