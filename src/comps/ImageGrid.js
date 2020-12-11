import React from 'react'
import useFirestore from '../hooks/useFirestore'

function ImageGrid({setSelectedImg}) {

    const { docs } = useFirestore()
    console.log(docs)

    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <div className='img-wrap' key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt={doc.fileName} />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
