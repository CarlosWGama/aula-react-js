import './comentario.css';

function Comentario() {
    return ( <div className='comentario-container'>
        <p className='comentario-autor'>Fulano (fulano@gmail.com)</p>
        <p className='comentario'>comentário da pessoa</p>
    </div> );
}

export default Comentario;