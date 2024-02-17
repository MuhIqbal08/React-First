import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeNav from './Pages/HomeNav';
import DashboardPages from './Pages/DashboardPages';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<HomeNav />} />
      <Route path='/dashboard' element={<DashboardPages />} />
    </Routes>
  </Router>
  )
}

export default App;
