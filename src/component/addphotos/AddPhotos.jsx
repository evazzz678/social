import React from 'react'
import "./AddPhotos.css"

function AddPhotos() {
  return (
    <div className='addPhotos'>
        
        {/* <div className='file'>
        <input type="file" className='addPhoto-input' />
        </div>

        <div className='caption'>
        <textarea name="about" id="" className='caption'>caption</textarea>
        <button>share</button>
        </div> */}

        <input type="file" className='file-input' />
            <textarea placeholder="Add a caption..." className="text-area"></textarea>
            <button className="button">Share</button>
        
    </div>
    
  )
}

export default AddPhotos
