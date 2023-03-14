import { useDispatch } from 'react-redux'
import { changeUpload } from '../redux/uploadSlice'

const FileUpload = () => {
    const dispatch = useDispatch()
   

    const handleClick = () => {
        // whatever button selects the file from pc should dispatch the base64 string to to 'upload' and then display the image in the section
        // <Base64 Tut>
        // https://www.youtube.com/watch?v=pfxd7L1kzio
        dispatch(changeUpload('706f73746d616e2d74657374'))
    }
    
    return (
        <div className="file-upload">
            <div className="container">
                <h2>Upload File</h2>
                <div className="file-select">
                    <button className="btn" onClick={handleClick}>Browse Files</button>
                    <p><mark>ChosenFilePath</mark></p>
                </div>
            </div>
        </div>
    )
}

export default FileUpload