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
        <Hero title="Seja bem vindo" text="Conheça tudo sobre o Spike Volley BR aqui!" />
      </header>
      <main className='container'>
        <div className='w-100 my-5 py-5 row d-flex justify-content-center'>
          <h1 className='text-white text-center mb-4'>Nossos recursos:</h1>
          <div className='col-sm-8 col-md-3'>
            <Card
              title="Conheça as habilidades dos personagens" text="Olha aí o texto guloso!" icon="volleyball"
            />
          </div>
          <div className='col-sm-8 col-md-3'>
            <Card
              title="Descubra as melhores combinações" text="Olha aí o texto guloso!" icon="home"
            />
          </div>
          <div className='col-sm-8 col-md-3'>
            <Card
              title="Acesse nosso servidor do Discord" text="Olha aí o texto guloso!" icon="brands fa-discord"
            />
          </div>
        </div>
        <div className='w-100 my-5 row d-flex'>
          <div className="col-md-7 mx-auto">
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