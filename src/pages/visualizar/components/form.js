import { useState } from 'react';
import './form.css';

function FormComentario(props) {

    const [autor, setAutor] = useState();
    const [email, setEmail] = useState();
    const [comentario, setComentario] = useState();
    
    const handleSubmit = (e) => {
        //e.preventDefault evita que a página seja enviada para o action (recarregue)
        e.preventDefault()
        props.enviarComentario({autor, email, comentario});
        setAutor('');
        setEmail('');
        setComentario('');
    }

    return (<form id="form-form" onSubmit={handleSubmit}>
        <p>Enviar comentário</p>
        <input className='form-input' value={autor} type="text" placeholder='Digite seu nome' required onChange={e => setAutor(e.target.value) }/>

        <input className='form-input' type="email" value={email} placeholder='Digite seu email' required onChange={e => setEmail(e.target.value) }/>
        <textarea className='form-input' value={comentario} placeholder='Digite seu comentário' rows={5} cols={100} required onChange={e => setComentario(e.target.value) }/>
        <button className='form-button'>Enviar</button>
    </form>);
}

export default FormComentario;