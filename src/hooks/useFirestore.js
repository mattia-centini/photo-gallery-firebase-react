import {useState, useEffect} from 'react'
import {projectFirestore} from '../firebase/config'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
       const unsub = projectFirestore.collection('images')
        .orderBy('createdAt', 'desc')
        //onSnapshot fires a callback everytime a change accour inside this collection and once initially
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })
        //cleanup function
        return () => unsub()
    }, [collection])

    return {docs}
}

export default useFirestore