import React from "react"

export default function Hero({title}) {
    return (
        <div className="fixed-bg d-flex pt-4">
            <h1 className="text-white m-auto">{title}</h1>
        </div>

    )
}