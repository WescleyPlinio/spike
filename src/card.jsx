import React from "react"

export default function Card ({title, text}) {
    return (
        <div className="card h-100" style={{width: '18rem;'}}>
            <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3983810/8c3b601b67c3cd20f1c63bf9a042ed16622fbc29/header.jpg?t=1760584948" className="card-img-top" alt="spike volleyball cross"/>
            <div className="card-body">
                <h5 className="card-title text-primary-custom">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}
