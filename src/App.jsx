import Navbar from './navbar.jsx'
import Card from './card.jsx'
import Footer from './footer.jsx'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='container mx-auto mb-3 row g-2'>
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