import Layout from '../../layouts/Layout'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Routes>
    <Route path="/" element={<Layout/>}/>
   </Routes>
  )
}

export default App
