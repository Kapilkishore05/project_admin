import {useState} from 'react'
import All from './All'
import { BrowserRouter as Router , Route , Switch, Routes } from 'react-router-dom';
import ProductPage from './Product/ProductPage';
import CustomerPage from './Customer/CustomerPage';
import ReviewPage from './Review/ReviewPage';
function App() {
  return (
    <Router>
        <Routes>
        <Route exact path='/' element={<All />} />
        <Route path='/ProductPage' element={<ProductPage />} />
        <Route path='/CustomerPage' element={<CustomerPage />}/>
        <Route path='ReviewPage' element={<ReviewPage />} />
        </Routes>
   </Router>
  )
}

export default App
