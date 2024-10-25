import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Client/Home'
import Dashboard from './Pages/Admin/Dashboard'
import Product from './Pages/Admin/Product/Product'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/admin/dashboard' element= {<Dashboard/>}/>
        <Route path='/admin/product' element= {<Product/>}/>
      </Routes>
    </>
  )
}

export default App
