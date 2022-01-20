import './card-video.css'

function CardVideo() {
    return ( <div className="cv-container">
        <img className='cv-img' src="http://lorempixel.com.br/200/100"/>
        <div className='cv-info'>
            <p className='cv-curso'>curso x</p>
            <p className='cv-professor'>Professor João</p>
            <p className='cv-duracao'>20min</p>
        </div>
    </div> );
}

export default CardVideo;