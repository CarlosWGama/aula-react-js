import './styles.css';
import { Header } from './components';

function Template(props) {
    return (<div id="main">
        <Header/>
        {props.children}
    </div> );
}

export default Template;