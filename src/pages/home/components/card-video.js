import './card-video.css'

function CardVideo(props) {
    return ( <div className="cv-container">
        <img className='cv-img' src={props.video.link}/>
        <div className='cv-info'>
            <p className='cv-curso'>{props.video.curso}</p>
            <p className='cv-professor'>{props.video.professor}</p>
            <p className='cv-duracao'>{props.video.duracao}</p>
        </div>
    </div> );
}

export default CardVideo;