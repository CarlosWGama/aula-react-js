import './form.css';

function FormComentario() {
    return (<form id="form-form">
        <p>Enviar comentário</p>
        <input className='form-input' type="text" placeholder='Digite seu nome' required/>
        <input className='form-input' type="email" placeholder='Digite seu email' required/>
        <textarea className='form-input' placeholder='Digite seu email' rows={5} cols={100} required/>
        <button className='form-button'>Enviar</button>
    </form>);
}

export default FormComentario;