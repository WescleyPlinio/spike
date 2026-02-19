export default function Card ({title, text, icon}) {
    return (
        <div className="card bg-dark-custom rounded-4 shadow-lg border-0 h-100">
            <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 text-center">
                <div className="icon-wrapper bg-primary-custom rounded-circle d-flex align-items-center justify-content-center mb-3" 
                     style={{width: '70px', height: '70px'}}>
                    <i className={`fa fa-${icon} fa-2x text-white`}></i>
                </div>
                <h5 className="card-title text-accent-custom fw-bold mb-3">{title}</h5>
                <p className="text-white mb-0">{text}</p>
            </div>
        </div>
    )
}