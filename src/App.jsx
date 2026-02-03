import Navbar from './components/Navbar.jsx'
import Card from './Card.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Iframe from './Iframe.jsx'
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
          <div className='col-md-5'>
            <Card
              title="Dublagem dos capítulos de Spike Volley" text="Veja por aqui todos os episódios lançados no Youtube!"
            />
          </div>
          <div className="col-md-7">
            <Iframe
              linkYt="https://www.youtube.com/embed/8seUHGdNEjM?si=fCHFQHNNUMcaonrL"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


export default App