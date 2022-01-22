import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../providers/api';

import { FormComentario, Comentario } from './components';
import './styles.css';

function VisualizarPage() {

    const params = useParams();
    
    const [ comentarios, setComentarios ] = useState([]);
    const [ video, setVideo ] = useState({
        id: 0,
        url: '',
        curso: '---',
        professor: '---',
        duracao: '0min'
    });
    
    useEffect(() => {
        console.log(params.id);
        //Busca vídeo
        api.get(`/videos/${params.id}`)
            .then((response) => {
                const novoVideo = response.data.data.attributes;
                novoVideo.id = response.data.id;
                setVideo(novoVideo);
            })
            .catch(e => console.log(e));


        //Busca comentários
        api.get(`/comentarios?filters[video]=${params.id}`)
            .then(response => {
                const novosComentarios = [];
                response.data.data.forEach(data => {
                    const comentario = data.attributes;
                    comentario.id = data.id;
                    novosComentarios.push(comentario)
                })
    
                setComentarios(novosComentarios);
            })
            .catch(e => console.log(e))
    
    }, [])

    

    const enviarComentario = (comentario) => {
        //[...variavel] retorna um vetor com os dados da variavel
        const novosComentarios = [...comentarios];
        novosComentarios.push(comentario);
        setComentarios(novosComentarios);

        //envia comentario
        comentario.video = params.id;
        api.post('/comentarios', {
            data: comentario
        })
            .then(sucess => console.log(sucess))
            .catch(error => console.log(error))
    }



    return ( 
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
     );
}

export default VisualizarPage;