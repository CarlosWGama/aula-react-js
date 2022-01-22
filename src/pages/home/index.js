import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../providers/api';
import Template from '../template';
import { CardVideo } from './components';
import './styles.css';

function HomePage() {
    
    const location = useLocation();
    const [ videos, setVideos ] = useState([
        {id:1, link:'http://lorempixel.com.br/200/100', curso: 'Curso A', professor: 'Professor Carlos', duracao: '20min'},
        {id:2, link:'http://lorempixel.com.br/200/100', curso: 'Curso B', professor: 'Professor João', duracao: '1h'},
        {id:3, link:'http://lorempixel.com.br/200/100', curso: 'Curso C', professor: 'Professor José', duracao: '30min'},
        {id:4, link:'http://lorempixel.com.br/200/100', curso: 'Curso D', professor: 'Professora Maria', duracao: '10min'},
        {id:5, link:'http://lorempixel.com.br/200/100', curso: 'Curso E', professor: 'Professor Marcos', duracao: '15min'},
    ])
    
    //Ajusta o retorno da busca
    const handleResponse = (response) => {
        console.log(response);
        const novosVideos = [];
        response.data.data.forEach((v) => {
            const video = v.attributes;
            video.id = v.id;
            novosVideos.push(video)
        })
        setVideos(novosVideos);
    }

    useEffect(() => {
        if (location.state != null) {
            //tem item para buscar
            api.get(`/videos?filters[curso][$startsWith]=${location.state.buscar}`)
                .then(handleResponse) 
                .catch(e => console.log(e))
        } else {
            api.get(`/videos`)
                .then(handleResponse) 
                .catch(e => console.log(e))
        }
            

    }, [location.state])



    return (
                <div id="home-container">
                    {videos.map(v => <CardVideo video={v}/>)}
                </div>
            );
}

export default HomePage;