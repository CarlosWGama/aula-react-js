import { FormComentario, Comentario, Header } from './components';
import './styles.css';

function VisualizarPage() {
    return ( 
        <div id="visualizar-main">
            <Header/>
            <div id="visualizar-align">
                <div id="visualizar-container">
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/N9O06OAv4v0" frameborder="0"  allowfullscreen></iframe>
                    
                        <div id="visualizar-info">
                            <p id="visualizar-curso">Curso X (20min)</p>
                            <p>Professor</p>

                            {/* Comentários */}
                            <FormComentario/>
                            <hr/>
                            <p>10 Comentários</p>

                            <Comentario/>
                            <Comentario/>
                            <Comentario/>
                            <Comentario/>
                        </div>
                </div>
            </div>
        </div>


     );
}

export default VisualizarPage;