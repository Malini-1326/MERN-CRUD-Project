import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import BodyOnlyExample from '../../react-crud/src/components/userform'
import UserList from '../../react-crud/src/components/userList'
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/userForm" element={<BodyOnlyExample />} />
        <Route path="/userForm/:id" element={<BodyOnlyExample />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
