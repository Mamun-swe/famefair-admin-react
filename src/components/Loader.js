import React from 'react'
import { Icon } from 'react-icons-kit'
import { spinner3 } from 'react-icons-kit/icomoon/spinner3'

const Loader = () => {
    const style = {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '9999',
        background: 'rgba(255, 255, 255, 0.384)'
    }

    return (
        <div className="loader" style={style}>
            <div className="flex-center flex-column">
                <Icon icon={spinner3} size={30} className="spin" />
            </div>
        </div>
    );
};

export default Loader;