import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { Home } from './pages/Home.jsx';
import { About } from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './public/styles/desktop.css'


export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    )
}