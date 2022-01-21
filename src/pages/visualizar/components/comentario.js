import './comentario.css';

function Comentario(props) {

    // Dica: podemos extrair uma propriedade de uma variável usando a seguinte sintaxe
    const { comentario } = props;
    return ( <div className='comentario-container'>
        <p className='comentario-autor'>{comentario.autor} ({comentario.email})</p>
        <p className='comentario'>{comentario.comentario}</p>
    </div> );
}

export default Comentario;