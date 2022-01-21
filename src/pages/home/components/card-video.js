import { useNavigate } from 'react-router-dom';
import './card-video.css'

function CardVideo(props) {

    const navigate = useNavigate()

    return ( <div className="cv-container" onClick={() => navigate(`/visualizar/${props.video.id}`, {state: {video: props.video}})}>
        <img className='cv-img' src={props.video.link}/>
        <div className='cv-info'>
            <p className='cv-curso'>{props.video.curso}</p>
            <p className='cv-professor'>{props.video.professor}</p>
            <p className='cv-duracao'>{props.video.duracao}</p>
        </div>
    </div> );
}

export default CardVideo;