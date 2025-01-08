import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Header from './components/Header/Header.jsx';
import './assets/style/global.module.scss';
import Error from './pages/Error/Error.jsx';
import Footer from './components/Footer/Footer.jsx';
import Layout from './components/Layout/Layout.jsx';
import Details from './pages/Details/Details.jsx';

createRoot(document.getElementById('root')).render(
     <StrictMode>
          <BrowserRouter>
               <Layout>
                    <Header />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/apartment/:id" element={<Details />} />
                         <Route path="/about" element={<About />} />
                         <Route path="*" element={<Error />} />
                    </Routes>
               </Layout>
               <Footer />
          </BrowserRouter>
     </StrictMode>,
);
