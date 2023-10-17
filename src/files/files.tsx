import React from 'react'
import "./styles.css";
function Files(props) {
    const { fileName, fileSize, onClose } = props;
    const FileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 12 15" fill="none">
        <path d="M2.98125 11.34H9.01875V10.26H2.98125V11.34ZM2.98125 8.28H9.01875V7.2H2.98125V8.28ZM1.125 14.4C0.825 14.4 0.5625 14.292 0.3375 14.076C0.1125 13.86 0 13.608 0 13.32V1.08C0 0.792 0.1125 0.54 0.3375 0.324C0.5625 0.108 0.825 0 1.125 0H7.89375L12 3.942V13.32C12 13.608 11.8875 13.86 11.6625 14.076C11.4375 14.292 11.175 14.4 10.875 14.4H1.125ZM7.33125 4.428V1.08H1.125V13.32H10.875V4.428H7.33125Z" fill="#3A7C7C" />
    </svg>
    const CloseIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g opacity="0.7">
            <path d="M6.6933 5.99986L10.2089 1.80924C10.2679 1.73959 10.2183 1.63379 10.1272 1.63379H9.05848C8.99553 1.63379 8.93526 1.66191 8.89375 1.71013L5.99419 5.16682L3.09464 1.71013C3.05446 1.66191 2.99419 1.63379 2.92991 1.63379H1.86116C1.77009 1.63379 1.72053 1.73959 1.77946 1.80924L5.29509 5.99986L1.77946 10.1905C1.76626 10.206 1.75779 10.225 1.75506 10.2452C1.75233 10.2654 1.75545 10.2859 1.76405 10.3044C1.77265 10.3229 1.78637 10.3385 1.80359 10.3494C1.8208 10.3603 1.84078 10.366 1.86116 10.3659H2.92991C2.99285 10.3659 3.05312 10.3378 3.09464 10.2896L5.99419 6.8329L8.89375 10.2896C8.93392 10.3378 8.99419 10.3659 9.05848 10.3659H10.1272C10.2183 10.3659 10.2679 10.2601 10.2089 10.1905L6.6933 5.99986Z" fill="black" fill-opacity="0.85" />
        </g>
    </svg>
    return (
        <div className='fileContainer'>
            <div className='icon'>

                <FileIcon />
                <div className='fileInfo'>
                    <ul>
                        <li className='filename'>passport.pdf</li>
                        <li className='fileSize'>18.5 KB</li>
                    </ul>

                </div>

            </div>

            <div className='close'>
                <CloseIcon onClick={onClose} />
            </div>
        </div>
    )
}

export default Files