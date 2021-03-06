import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Review from './pages/Review/Review';
import Upload from './pages/Upload/Upload';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/:id" element={<Review />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
