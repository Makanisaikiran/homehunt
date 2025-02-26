import { useState } from 'react'
import './App.css'
import AuthPage from './components/Authpage'
import HomeHuntLanding from './components/HomeHuntLanding'

function App() {
  const [page,setPage]=useState("Landing")
  return (
    <>
    {page === "Auth" && <AuthPage setPage={setPage}/>}
    {page === "Landing" && <HomeHuntLanding setPage={setPage}/>}
    </>
  )
}

export default App
