import './header.css'

function Header() {
    return ( <div id='hd-container'>
        <p id="hd-logo">Curso Online CWG</p>

        <div id="hd-search">
            <input type="text" id="hd-input" placeholder='Busque seu vídeo' />
            <button id="hd-button">Buscar</button>
        </div>
    </div> );
}

export default Header;