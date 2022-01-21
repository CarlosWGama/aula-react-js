import { useState } from 'react';
import Template from '../template';
import { FormComentario, Comentario } from './components';
import './styles.css';

function VisualizarPage() {

    const [ comentarios, setComentario ] = useState([]);
    const [ video, setVideo ] = useState({
        url: 'https://www.youtube.com/embed/N9O06OAv4v0',
        curso: 'Curso X',
        professor: 'Professor Carlos',
        duracao: '20min'
    });


    const enviarComentario = (comentario) => {
        //[...variavel] retorna um vetor com os dados da variavel
        const novoComentario = [...comentarios];
        novoComentario.push(comentario);
        setComentario(novoComentario);
    }



    return ( 
        <Template>
            <div id="visualizar-align">
                <div id="visualizar-container">
                    <iframe width="100%" height="500" src={video.url} frameborder="0"  allowfullscreen></iframe>
                    
                        <div id="visualizar-info">
                            <p id="visualizar-curso">{video.curso} ({video.duracao})</p>
                            <p>{video.professor}</p>

                            {/* Comentários */}
                            <FormComentario enviarComentario={enviarComentario}/>
                            <hr/>
                            <p>{comentarios.length} Comentário(s)</p>
                            {comentarios.map(c => <Comentario comentario={c}/>)}
                        </div>
                </div>
            </div>
        </Template>
     );
}

export default VisualizarPage;