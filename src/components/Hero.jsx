import React from "react"

export default function Hero({title, text}) {
    return (
        <div className="fixed-bg d-flex flex-column justify-content-center align-items-center gap-2 pt-4">
            <h1 className="text-accent-custom fw-bold">{title}</h1>
            <p className="text-white">{text}</p>
        </div>

    )
}