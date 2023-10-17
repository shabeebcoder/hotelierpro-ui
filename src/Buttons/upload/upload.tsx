import React from 'react'
import "./styles.css"

function Upload(props) {

    const { title, handleOnClick } = props;

    const PlusIcons = () => <div className='buttonicon'>
        <svg xmlns="http://www.w3.org/2000/svg" display={'block'} color='red' width="14" height="14" viewBox="0 0 14 14" fill="red">
            <path d="M7.46838 1.37598H6.53088C6.44755 1.37598 6.40588 1.41764 6.40588 1.50098V6.40723H1.75C1.66667 6.40723 1.625 6.44889 1.625 6.53223V7.46973C1.625 7.55306 1.66667 7.59473 1.75 7.59473H6.40588V12.501C6.40588 12.5843 6.44755 12.626 6.53088 12.626H7.46838C7.55172 12.626 7.59338 12.5843 7.59338 12.501V7.59473H12.25C12.3333 7.59473 12.375 7.55306 12.375 7.46973V6.53223C12.375 6.44889 12.3333 6.40723 12.25 6.40723H7.59338V1.50098C7.59338 1.41764 7.55172 1.37598 7.46838 1.37598Z" fill="#1A1A1A" fill-opacity="0.85" />
        </svg>
        upload
    </div>
    return (
        <div className='uploadButtonMainContainer'>

            <div className='uploadButtonContiner'>
                <span className='title'>{title}</span>
                <button className='uploadButton' onClick={handleOnClick}>
                    <PlusIcons />

                </button>
            </div>
            <div className='fileInfoContainer'>
                <ul>
                    <li>File type jpeg/png accepted</li>
                    <li>Maximum File size 1 MB</li>
                </ul>

            </div>
        </div>
    )
}

export default Upload