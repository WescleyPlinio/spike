export default function Iframe({linkYt}) {
    return (
        <div className='ratio ratio-16x9'>
            <iframe src={linkYt} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}