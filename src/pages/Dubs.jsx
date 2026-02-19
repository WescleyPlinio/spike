import Navbar from '../components/Navbar.jsx'
import Card from '../components/Card.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Iframe from '../components/Iframe.jsx'

export default function Dubs() {
    return (
        <>

            <header>
                <Navbar />
                <Hero title="Saiba tudo sobre a fã dublagem!" />
            </header>

            <main className='container'>
                <div className='w-100 my-5 row g-1'>
                    <div className="col-md-7 px-0 mb-2">
                        <Iframe
                            linkYt="https://www.youtube.com/embed/8seUHGdNEjM?si=fCHFQHNNUMcaonrL"
                        />
                    </div>
                    <div className="col-md-5 m-start">
                        <h5 className="text-accent-custom">E se o The Spike fosse dublado?</h5>
                        <p className='text-white'>
                            O vídeo apresenta um projeto de dublagem para o modo história do jogo The Spike Cross - Volleyball Story. A iniciativa surgiu de membros do servidor Discord do Vini, Lost e Batata, e começou como uma brincadeira, mas cresceu com a participação de mais de 10 pessoas.
                        </p>
                        <p className='text-white'>
                            O objetivo é dublar as vozes dos personagens do jogo em português do Brasil. A primeira temporada já está quase toda dublada , mas o projeto busca mais participantes para atribuir vozes únicas a cada personagem, especialmente para as temporadas futuras que apresentam muitos novos personagens.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />

        </>
    )
}