import React from "react";

export default function Footer(){
    return(
    <footer className="py-5 bg-dark-custom text-white w-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <h3 className="fw-bold mb-3">
                        <i className="bi bi-puzzle-fill me-2 text-accent-custom"></i>
                        Spike <span className="text-accent-custom">Cross</span> Fans
                    </h3>
                    <p className="text-light mb-4">Este é um site feito por fãs para fãs. Não temos afiliação com a Suncyan ou com os desenvolvedores de Spike Cross.</p>
                    <p className="text-light small">Spike Cross é propriedade da Suncyan. Todas as imagens e referências são usadas para fins educacionais e de fãs.</p>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <h5 className="fw-bold mb-3">Links Rápidos</h5>
                    <ul className="list-unstyled footer-links">
                        <li className="mb-2"><a href="#home">Início</a></li>
                    </ul>
                </div>
                
                <div className="col-lg-4">
                    <h5 className="fw-bold mb-3">Contato</h5>
                    <p className="text-light mb-3">Tem alguma dúvida ou sugestão para o site?</p>
                    <a href="mailto:contato@spikecrossfans.com" className="btn btn-outline-light">
                        <i className="bi bi-envelope me-2"></i> Enviar E-mail
                    </a>
                </div>
            </div>
            
            <hr className="my-5 border-light"/>
            
            <div className="row">
                <div className="col-md-6">
                    <p className="mb-0">&copy; 2023 Spike Cross Fans. Todos os direitos reservados.</p>
                </div>
                <div className="col-md-6 text-md-end">
                    <p className="mb-0">Este site é mantido por do Spike Cross.</p>
                </div>
            </div>
        </div>
    </footer>

    )
}