import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div id='current-page'>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
