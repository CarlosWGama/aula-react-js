import { useState } from 'react';
import Template from '../template';
import { CardVideo } from './components';
import './styles.css';

function HomePage() {

    const [ videos, setVideos ] = useState([
        {link:'http://lorempixel.com.br/200/100', curso: 'Curso A', professor: 'Professor Carlos', duracao: '20min'},
        {link:'http://lorempixel.com.br/200/100', curso: 'Curso B', professor: 'Professor João', duracao: '1h'},
        {link:'http://lorempixel.com.br/200/100', curso: 'Curso C', professor: 'Professor José', duracao: '30min'},
        {link:'http://lorempixel.com.br/200/100', curso: 'Curso D', professor: 'Professora Maria', duracao: '10min'},
        {link:'http://lorempixel.com.br/200/100', curso: 'Curso E', professor: 'Professor Marcos', duracao: '15min'},
    ])

    return ( <Template>
                <div id="home-container">
                    {videos.map(v => <CardVideo video={v}/>)}
                </div>
            </Template> );
}

export default HomePage;