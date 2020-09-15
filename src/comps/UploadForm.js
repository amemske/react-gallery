import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const fileTypes = ['image/jpeg','image/png'];
    

    const changeHandler = (e) =>{
        //console.log('changed');
        let selected = e.target.files[0];
        //console.log(selected);
         //first check if there is a file
        if(selected && fileTypes.includes(selected.type)) {
            setFile(selected); // set the state if file exists
           // console.log(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please add the correct file type PNG/JPG');
        }
    }

    return (
        <form>
            <label>
            <input type='file' onChange={changeHandler} />
            <span> + </span>
            </label>
            <div className='output'>
                { error && <div className='error'>{error}</div> }
                 { file && <div className='file'>{file.name}</div>}
                 {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    );
}

export default UploadForm;