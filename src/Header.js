import React from 'react';

import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleButtonClick = (path) => () => {
        navigate(path);
    };

    return (
        <div>
            <button onClick={handleButtonClick("/editor-tools/")}> Homepage </button>
        </div>
    );
}

export default Header;