import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import AddProject from './components/AddProject'

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
