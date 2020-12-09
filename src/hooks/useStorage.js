import {useState, useEffect} from 'react'
import {projectStorage} from '../firebase/config'

const useStorage = (file) => {
    const [progess, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        //references. creating a ref to a file inside the default firebase storage
        const storageRef = projectStorage.ref(file.name)
        
        //upload the file on the storageRef 
        storageRef.put(file).on('state_changed', (snap) => {
            //this will give you the percentage of upload
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage);
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadUrl()
            setUrl(url)
        })
     
    }, [file])

    return { progess, error, url }
}