import Navbar from '../components/Navbar.jsx'
import Card from '../components/Card.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Iframe from '../components/Iframe.jsx'

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
            </main>

            <Footer />

        </>
    )
}