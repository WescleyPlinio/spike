import Navbar from './components/Navbar.jsx'
import Card from './Card.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero title="Teste Hero" />
      </header>
      <main>
        <div className='container mx-auto my-3 row g-2'>
          <div className='col-4'>
            <Card
              title="Teste" text="Teste muito moleza"
            />
          </div>
          <div className='col-4'>
            <Card
              title="Teste" text="Teste muito bom"
            />
          </div>
          <div className='col-4'>
            <Card
              title="Teste" text="Teste muito competitivo"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


export default App