import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css'

function Header() {
    const navigate = useNavigate();
    const [ curso, setCurso ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Clicou')
        navigate('/', {state:{buscar:curso}})
    }

    return ( <div id='hd-container'>
        <Link id="hd-logo" to="/" >Curso Online CWG</Link>

        <form id="hd-search" onSubmit={handleSubmit}>
            <input type="text" id="hd-input" placeholder='Busque seu vídeo' onChange={(e) => setCurso(e.target.value)} />
            <button id="hd-button">Buscar</button>
        </form>
    </div> );
}

export default Header;