import { useState } from 'react';
import './header.css'

function Header() {

    const [ curso, setCurso ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Clicou')
    }

    return ( <div id='hd-container'>
        <p id="hd-logo">Curso Online CWG</p>

        <form id="hd-search" onSubmit={handleSubmit}>
            <input type="text" id="hd-input" placeholder='Busque seu vídeo' onChange={(e) => setCurso(e.target.value)} />
            <button id="hd-button">Buscar</button>
        </form>
    </div> );
}

export default Header;