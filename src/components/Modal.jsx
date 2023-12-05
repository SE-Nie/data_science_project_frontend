import { react, useState } from 'react';


const Modal = ({ children, onClose }) => {

    return (
        <div onClick={onClose} className={`bg-gray-200 bg-opacity-50 fixed flex items-center justify-center h-[100vh] w-screen z-50`}>
            <div className="bg-zinc-900 rounded-sm p-10 w-[80vw]" >
                {children}
            </div>
        </div>
    )
}

export default Modal;