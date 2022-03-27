import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import AddProject from './pages/AddProject'
import Profile from './pages/Profile/Profile'
import ViewProject from './pages/ViewProject/ViewProject'

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/viewproject" element={<ViewProject/>}/>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
