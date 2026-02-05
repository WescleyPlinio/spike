import React from "react"

export default function Card ({title, text, icon}) {
    return (
        <div className="card bg-dark-custom rounded-5 shadow ratio ratio-16x9">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i style={{ fontSize: '60px' }} className={`fa fa-${icon} mb-3 text-accent-custom`}></i>
                <h5 className="card-title text-center text-white">{title}</h5>
            </div>
        </div>
    )
}
