import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput)

  return (
    <div className='body'>
      <Sidebar />
      <main className='main-container'>
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />
        <Main searchInput={searchInput} />
        <Footer />
      </main>
    </ div>
  )
}

export default App
