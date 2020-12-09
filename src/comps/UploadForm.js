import React, {useState} from 'react'

function UploadForm() {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        //files[0] selects the first files uploaded
        let selected = e.target.files[0]
        console.log(selected)
        
        if(selected && types.includes(selected.type)){ 
            //if the user has selected something for upload && the file   
            //uploaded is either image/png or image/jpeg
            //selected.type is found in the console.log
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please select a file format PNG or JPEG')
        }
    }


    return (
        <form>
            <input type='file' onChange={changeHandler}/>
            <div className='output'>
                 {error && <div className='error'>{error}</div>}
                 {/* file.name is found in console.log(selected) ==> name */}
                 {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadForm
