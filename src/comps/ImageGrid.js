import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion'

function ImageGrid({setSelectedImg}) {

    const { docs } = useFirestore()
    console.log(docs)

    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <motion.div className='img-wrap' key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                    layout
                    whileHover={{ opacity: 1 }}
                >
                    <motion.img src={doc.url} alt={doc.fileName}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay:1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
