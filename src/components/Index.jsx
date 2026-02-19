import Navbar from './Navbar.jsx'
import Card from '../Card.jsx'
import Footer from './Footer.jsx'
import Hero from './Hero.jsx'
import Iframe from '../Iframe.jsx'

export default function Index() {
    return (
        <>

            <header>
                <Navbar />
                <Hero title="Seja bem vindo" text="Conheça tudo sobre o Spike Volley BR aqui!" />
            </header>

            <main className='container'>
                <div className='w-100 my-5 pb-5'>
                    <div className='row g-4 justify-content-center'>
                        <div className='col-12 col-sm-10 col-md-6 col-lg-4'>
                            <div className="card-wrapper h-100 mx-auto" style={{ maxWidth: '320px' }}>
                                <Card
                                    title="Conheça cada personagem"
                                    text="Explore as habilidades, estatísticas e características únicas de cada personagem do jogo."
                                    icon="volleyball"
                                />
                            </div>
                        </div>
                        <div className='col-12 col-sm-10 col-md-6 col-lg-4'>
                            <div className="card-wrapper h-100 mx-auto" style={{ maxWidth: '320px' }}>
                                <Card
                                    title="Saiba as melhores combinações"
                                    text="Descubra as estratégias e combinações de personagens mais eficazes para vencer."
                                    icon="chess"
                                />
                            </div>
                        </div>
                        <div className='col-12 col-sm-10 col-md-6 col-lg-4'>
                            <div className="card-wrapper h-100 mx-auto" style={{ maxWidth: '320px' }}>
                                <Card
                                    title="Acesse nosso servidor do Discord"
                                    text="Junte-se à comunidade para dicas, atualizações e partidas com outros jogadores."
                                    icon="brands fa-discord"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-100 my-5 row g-1'>
                    <div className="col-md-7 px-0 mb-2">
                        <Iframe
                            linkYt="https://www.youtube.com/embed/8seUHGdNEjM?si=fCHFQHNNUMcaonrL"
                        />
                    </div>
                    <div className="col-md-5 m-start">
                        <h5 className="text-accent-custom">E se o spike fosse dublado?</h5>
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