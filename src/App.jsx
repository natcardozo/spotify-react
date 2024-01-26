import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='body'>
      <Sidebar />
      <main className='main-container'>
        <Header />
        <Main />
        <Footer />
      </main>
    </ div>
  )
}

export default App
