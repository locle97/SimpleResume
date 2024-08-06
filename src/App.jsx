import Header from './Header.jsx';
import Home from './Home';
import NotFound from './NotFound';
import Footer from './Footer.jsx';
import { HashRouter, Routes, Route } from "react-router-dom";
import ResumeBuilder from './ResumeBuilder.jsx';

function App() {
  return (
    <HashRouter>
      <div className="text-black flex flex-col">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<ResumeBuilder />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
