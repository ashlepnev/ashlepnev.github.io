import {React, useEffect} from 'react';
import {
  BrowserRouter,
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

  return (
      <div className="container">
        <header className="header">
          <div className="header-container">
            <div className="header-logo">
              <a href="/" className="">
                фотка
              </a>
              <h1 className="header-blog-description">подпись</h1>
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
            <a href="#" className="btn btn-header download-pdf">Резюме в PDF</a>
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
            <div className="footer-block text-right"></div>
          </footer>
          </main>
        
        </div>

    </div>
  );
}

export default App;
